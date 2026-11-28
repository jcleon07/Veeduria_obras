from django.core.management.base import BaseCommand
from django.db import transaction

from apps.sites.models import Locality

LOCALITIES = [
    ("01", "Usaquén"),
    ("02", "Chapinero"),
    ("03", "Santa Fe"),
    ("04", "San Cristóbal"),
    ("05", "Usme"),
    ("06", "Tunjuelito"),
    ("07", "Bosa"),
    ("08", "Kennedy"),
    ("09", "Fontibón"),
    ("10", "Engativá"),
    ("11", "Suba"),
    ("12", "Barrios Unidos"),
    ("13", "Teusaquillo"),
    ("14", "Los Mártires"),
    ("15", "Antonio Nariño"),
    ("16", "Puente Aranda"),
    ("17", "La Candelaria"),
    ("18", "Rafael Uribe Uribe"),
    ("19", "Ciudad Bolívar"),
    ("20", "Sumapaz"),
]

class Command(BaseCommand):
    help = "Loads (or updates) the 20 localities of Bogtotá. Safe to run multiple times."

    @transaction.atomic
    def handle(self, *args, **options):
        created_count = 0
        for code, name in LOCALITIES:
            _, created = Locality.objects.update_or_create(code=code, defaults={"name": name})
            created_count += created

        updated_count = len(LOCALITIES) - created_count
        self.stdout.write(self.style.SUCCESS(
            f"Localities ready: {created_count} created, {updated_count} already existed."
        ))