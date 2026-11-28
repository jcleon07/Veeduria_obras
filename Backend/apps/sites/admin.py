from django.contrib import admin
from django.utils.html import format_html

from . import services
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
# Catalogs
# ---------------------------------------------------------------------------

@admin.register(Locality)
class LocalityAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")
    ordering = ("code",)

@admin.register(Contractor)
class ContractorAdmin(admin.ModelAdmin):
    list_display = ("name", "tax_id")
    search_fields = ("name", "tax_id")

@admin.register(PublicEntity)
class PublicEntityAdmin(admin.ModelAdmin):
    list_display = ("acronym", "name", "petition_email")
    search_fields = ("acronym", "name")

# ---------------------------------------------------------------------------
# Inlines shown inside a construction site
# ---------------------------------------------------------------------------

class ProgressRecordInline(admin.TabularInline):
    model = ProgressRecord
    extra = 0
    can_delete = False
    fields = ("recorded_at", "physical_progress", "estimated_end_date", "registered_by")
    readonly_fields = fields

    def has_add_permission(self, request, obj=None):
        return False

class MilestoneInline(admin.TabularInline):
    model = Milestone
    extra = 0
    fields = ("name", "planned_date", "actual_date")

class RoadClosureInline(admin.TabularInline):
    model = RoadClosure
    extra = 0
    fields = ("road_section_kind", "road_section", "description", "start_date", "end_date")

class SiteImageInline(admin.TabularInline):
    model = SiteImage
    extra = 0
    fields = ("image", "preview", "caption", "uploaded_at")
    readonly_fields = ("preview", "uploaded_at")

    @admin.display(description="Preview")
    def preview(self, obj):
        if obj.pk and obj.image:
            return format_html('<img src="{}" style="height:60px">', obj.image.url)
        return "—"


# ---------------------------------------------------------------------------
# Construction site
# --------------------------------------------------------------------------- 

@admin.register(ConstructionSite)
class ConstructionSiteAdmin(admin.ModelAdmin):
    list_display = ("name", "type", "status", "locality", "physical_progress", "last_data_update")
    list_filter = ("status", "type", "locality")
    search_fields = ("name", "description")
    list_select_related = ("locality",)
    autocomplete_fields = ("locality", "contractor", "responsible_entity")
    inlines = [MilestoneInline, RoadClosureInline, SiteImageInline, ProgressRecordInline]

    fieldsets = (
        ("General", {"fields": ("name", "description", "type", "status")}),
        ("Location", {"fields": ("locality", "geometry_kind", "geometry")}),
        ("Budget and schedule", {"fields": (
            "budget", "start_date", "contractual_end_date", "estimated_end_date", "physical_progress",
        )}),
        ("Responsible parties", {"fields": ("contractor", "responsible_entity")}),
        ("Data traceability", {"fields": ("data_source", "last_data_update")}),
    )

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ("physical_progress", "estimated_end_date")
        return ("physical_progress",)

# ---------------------------------------------------------------------------
# Progress records: insert-only (BR-22)
# ---------------------------------------------------------------------------

@admin.register(ProgressRecord)
class ProgressRecordAdmin(admin.ModelAdmin):
    list_display = ("construction_site", "physical_progress", "estimated_end_date", "recorded_at", "registered_by")
    list_filter = ("construction_site__locality",)
    search_fields = ("construction_site__name",)
    autocomplete_fields = ("construction_site",)
    fields = ("construction_site", "physical_progress", "estimated_end_date")

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def save_model(self, request, obj, form, change):
        record = services.register_progress(
            site=obj.construction_site,
            progress=obj.physical_progress,
            estimated_end_date=obj.estimated_end_date,
            admin=request.user,
        )
        obj.pk = record.pk
        obj.recorded_at = record.recorded_at
        obj.registered_by = record.registered_by