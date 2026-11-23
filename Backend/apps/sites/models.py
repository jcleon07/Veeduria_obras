from django.conf import settings
from django.db import models
from django.db.models import Q, F


class GeometryKind(models.TextChoices):
    POINT = "POINT", "Point"
    LINE = "LINE", "Line"


class Locality(models.Model):
    name = models.CharField(max_length=100, unique=True)
    code = models.CharField(max_length=10, unique=True)

    class Meta:
        db_table = "locality"
        ordering = ["name"]
        verbose_name_plural = "localities"

    def __str__(self):
        return self.name


class Contractor(models.Model):
    name = models.CharField(max_length=200)
    tax_id = models.CharField(max_length=20, unique=True)

    class Meta:
        db_table = "contractor"
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} ({self.tax_id})"


class PublicEntity(models.Model):
    name = models.CharField(max_length=200)
    acronym = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=255)
    petition_email = models.EmailField(max_length=254)
    petition_url = models.URLField(max_length=255, null=True, blank=True)

    class Meta:
        db_table = "public_entity"
        ordering = ["name"]
        verbose_name_plural = "public entities"
        
    def __str__(self):
        return self.acronym
    

class ConstructionSite(models.Model):
    class Type(models.TextChoices):
        ROAD = "ROAD", "Road"
        BUILDING = "BUILDING", "Building"

    class Status(models.TextChoices):
        PLANNED = "PLANNED", "Planned"
        IN_PROGRESS = "IN_PROGRESS", "In progress"
        SUSPENDED = "SUSPENDED", "Suspended"
        FINISHED = "FINISHED", "Finished"

    name = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=Type.choices)
    status = models.CharField(max_length=20, choices=Status.choices)
    geometry_kind = models.CharField(max_length=10, choices=GeometryKind.choices)
    geometry = models.JSONField()
    budget =  models.DecimalField(max_digits=15, decimal_places=2)
    start_date = models.DateField(null=True, blank=True)
    contractual_end_date = models.DateField()
    estimated_end_date = models.DateField()
    physical_progress = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    data_source = models.CharField(max_length=200)
    last_data_update = models.DateField()
    locality = models.ForeignKey(Locality, on_delete=models.PROTECT, related_name="sites")
    contractor = models.ForeignKey(Contractor, on_delete=models.PROTECT, related_name="sites")
    responsible_entity = models.ForeignKey(PublicEntity, on_delete=models.PROTECT, related_name="sites")

    class Meta:
        db_table = "construction_site"
        ordering = ["name"]
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["type"]),
            models.Index(fields=["name"]),
        ]
        constraints = [
            models.CheckConstraint(
                condition=Q(type__in=["ROAD", "BUILDING"]),
                name="construction_site_type_valid",
            ),
            models.CheckConstraint(
                condition=Q(status__in=["PLANNED", "IN_PROGRESS", "SUSPENDED", "FINISHED"]),
                name="construction_site_status_valid",
            ),
            models.CheckConstraint(
                condition=Q(geometry_kind__in=["POINT", "LINE"]),
                name="construction_site_geometry_kind_valid",
            ),
            models.CheckConstraint(
                condition=Q(budget__gte=0),
                name="construction_site_budget_gte_0",
            ),
            models.CheckConstraint(
                condition=Q(start_date__isnull=True)
                | Q(contractual_end_date__gte=F("start_date")),
                name="construction_site_contractual_end_after_start",
            ),
            models.CheckConstraint(
                condition=Q(start_date__isnull=True)
                | Q(estimated_end_date__gte=F("start_date")),
                name="construction_site_estimated_end_after_start",
            ),
            models.CheckConstraint(
                condition=Q(physical_progress__gte=0) & Q(physical_progress__lte=100),
                name="construction_site_progress_0_100",
            ),
        ]

    def __str__(self):
        return self.name


class ProgressRecord(models.Model):
    construction_site = models.ForeignKey(ConstructionSite, on_delete=models.CASCADE, related_name="progress_records")
    recorded_at = models.DateTimeField(auto_now_add=True)
    physical_progress = models.DecimalField(max_digits=5, decimal_places=2)
    estimated_end_date = models.DateField()
    registered_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL, related_name="registered_progress_records")

    class Meta:
        db_table = "progress_record"
        ordering = ["-recorded_at"]
        indexes = [
            models.Index(fields=["construction_site", "recorded_at"]),
        ]
        constraints = [
            models.CheckConstraint(
                condition=Q(physical_progress__gte=0) & Q(physical_progress__lte=100),
                name="progress_record_progress_0_100",
            ),
        ]

    def __str__(self):
        return f"{self.construction_site} – {self.physical_progress}%"

    
class Milestone(models.Model):
    construction_site = models.ForeignKey(ConstructionSite, on_delete=models.CASCADE, related_name="milestones")
    name = models.CharField(max_length=200)
    planned_date = models.DateField()
    actual_date = models.DateField(null=True, blank=True)

    class Meta:
        db_table = "milestone"
        ordering = ["planned_date"]
        indexes = [
            models.Index(fields=["construction_site", "planned_date"]),
        ]

    @property
    def is_completed(self):
        return self.actual_date is not None

    def __str__(self):
        return self.name


class RoadClosure(models.Model):
    construction_site = models.ForeignKey(ConstructionSite, on_delete=models.CASCADE, related_name="road_closures")
    road_section_kind = models.CharField(max_length=10, choices=GeometryKind.choices)
    road_section = models.JSONField()
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    class Meta:
        db_table = "road_closure"
        ordering = ["-start_date"]
        constraints = [
            models.CheckConstraint(
                condition=Q(road_section_kind__in=GeometryKind.values),
                name="road_closure_section_kind_valid",
            ),
            models.CheckConstraint(
                condition=Q(end_date__isnull=True) | Q(end_date__gte=F("start_date")),
                name="road_closure_end_after_start",
            ),
        ]

    def __str__(self):
        return f"Closure - {self.construction_site} ({self.start_date})"


class SiteImage(models.Model):
    construction_site = models.ForeignKey(ConstructionSite, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="sites/%Y/%m", db_column="file_path", max_length=255)
    caption = models.CharField(max_length=255, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "site_image"
        ordering = ["-uploaded_at"]

    def __str__(self):
        return self.caption or self.image.name