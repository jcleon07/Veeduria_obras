from django.db.models import Count, Prefetch, Q, QuerySet
from django.utils import timezone

from .models import (
    ConstructionSite,
    Contractor,
    Locality,
    Milestone,
    ProgressRecord,
    PublicEntity,
    RoadClosure,
    SiteImage,
    )

# ---------------------------------------------------------------------------
# Construction sites
# ---------------------------------------------------------------------------

def list_sites(
    *,
    locality_id: int | None = None,
    status: str | None = None,
    site_type: str | None = None,
    contractor_id: int | None = None,
    responsible_entity_id: int | None = None,
    search: str | None = None,
) -> QuerySet[ConstructionSite]:
    
    qs = ConstructionSite.objects.select_related("locality", "contractor", "responsible_entity")
    
    if locality_id:
        qs = qs.filter(locality_id=locality_id)
    if status:
        qs = qs.filter(status=status)
    if site_type:
        qs = qs.filter(type=site_type)
    if contractor_id:
        qs = qs.filter(contractor_id=contractor_id)
    if responsible_entity_id:
        qs = qs.filter(responsible_entity_id=responsible_entity_id)
    if search:
        qs = qs.filter(Q(name__icontains=search) | Q(description__icontains=search))
    return qs.order_by("name")

def list_sites_for_map(
    *, locality_id: int | None = None, status: str | None = None, site_type: str | None = None
):
    qs = list_sites(locality_id=locality_id, status=status, site_type=site_type)
    return qs.values(
        "id", "name", "type", "status", "geometry_kind", "geometry", "physical_progress"
        )


def get_site(site_id: int) -> ConstructionSite:
    return ConstructionSite.objects.select_related("locality", "contractor", "responsible_entity").get(pk=site_id)

def get_site_detail(site_id: int) -> ConstructionSite:
    return(
        ConstructionSite.objects.select_related(
            "locality", "contractor", "responsible_entity"
            )
            .prefetch_related(
                Prefetch("milestones", queryset=Milestone.objects.order_by("planned_date")),
                Prefetch("images", queryset=SiteImage.objects.order_by("-uploaded_at")),
                Prefetch("road_closures", queryset=active_road_closures_queryset()),
            )
            .get(pk=site_id)
        )

def site_exists(site_id: int) -> bool:
    return ConstructionSite.objects.filter(pk=site_id).exists()

def get_sites_for_comparison(site_ids: list[int]) -> QuerySet[ConstructionSite]:
    return (
        ConstructionSite.objects.select_related(
            "locality", "contractor", "responsible_entity"
        )
        .filter(pk__in=site_ids)
        .order_by("name")
    )

# ---------------------------------------------------------------------------
# Progress history and milestones
# ---------------------------------------------------------------------------

def get_progress_history(site_id: int) -> QuerySet[ProgressRecord]:
    return (
        ProgressRecord.objects.filter(construction_site_id=site_id)
        .select_related("registered_by")
        .order_by("recorded_at")
    )

def get_latest_progress(site_id: int) -> ProgressRecord | None:
    return (
        ProgressRecord.objects.filter(construction_site_id=site_id)
        .order_by("-recorded_at")
        .first()
    )

def list_milestones(site_id: int, *, completed: bool | None = None) -> QuerySet[Milestone]:
    qs = Milestone.objects.filter(construction_site_id=site_id)
    
    if completed is True:
        qs = qs.filter(actual_date__isnull=False)
    elif completed is False:
        qs = qs.filter(actual_date__isnull=True)
    return qs.order_by("planned_date")

# ---------------------------------------------------------------------------
# Road closures
# ---------------------------------------------------------------------------

def active_road_closures_queryset() -> QuerySet[RoadClosure]:
    today = timezone.localdate()
    return RoadClosure.objects.filter(start_date__lte=today).filter(
        Q(end_date__isnull=True) | Q(end_date__gte=today)
    )

def list_active_road_closures(*, locality_id: int | None = None) -> QuerySet[RoadClosure]:
    qs = active_road_closures_queryset().select_related("construction_site")
    if locality_id:
        qs = qs.filter(construction_site__locality_id=locality_id)
    return qs.order_by("-start_date")

def list_road_closures(site_id: int) -> QuerySet[RoadClosure]:
    return RoadClosure.objects.filter(construction_site_id=site_id).order_by("-start_date")

# ---------------------------------------------------------------------------
# Images
# ---------------------------------------------------------------------------

def list_site_images(site_id: int) -> QuerySet[SiteImage]:
    return SiteImage.objects.filter(construction_site_id=site_id).order_by("-uploaded_at")

# ---------------------------------------------------------------------------
# Catalogs (for filter dropdowns)
# ---------------------------------------------------------------------------

def list_localities(*, with_site_count: bool = False) -> QuerySet[Locality]:
    qs = Locality.objects.all()
    if with_site_count:
        qs = qs.annotate(site_count=Count("sites"))
    return qs.order_by("name")

def list_contractors() -> QuerySet[Contractor]:
    return Contractor.objects.order_by("name")

def list_public_entities() -> QuerySet[PublicEntity]:
    return PublicEntity.objects.order_by("name")

def count_sites_by_status() -> dict[str, int]:
    rows = ConstructionSite.objects.values("status").annotate(total=Count("id"))
    return {row["status"]: row["total"] for row in rows}