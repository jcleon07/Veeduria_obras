from django.db import transaction
from .models import ConstructionSite, ProgressRecord

@transaction.atomic
def register_progress(*, site: ConstructionSite, progress, estimated_end_date, admin):
    record = ProgressRecord.objects.create(
        construction_site=site,
        physical_progress=progress,
        estimated_end_date=estimated_end_date,
        registered_by=admin,
    )
    site.physical_progress = progress
    site.estimated_end_date = estimated_end_date
    site.save(update_fields=["physical_progress", "estimated_end_date"])

    return record