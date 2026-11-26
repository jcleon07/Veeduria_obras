import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="AccountProfile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "role",
                    models.CharField(
                        choices=[
                            ("citizen", "Ciudadano registrado"),
                            ("administrator", "Administrador"),
                        ],
                        default="citizen",
                        max_length=20,
                    ),
                ),
                (
                    "profile_photo",
                    models.ImageField(
                        blank=True,
                        upload_to="accounts/profile_photos/",
                    ),
                ),
                ("description", models.TextField(blank=True)),
                (
                    "personal_data_policy_accepted_at",
                    models.DateTimeField(blank=True, null=True),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="account_profile",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "perfil de cuenta",
                "verbose_name_plural": "perfiles de cuenta",
                "ordering": ("user__username",),
            },
        ),
    ]
