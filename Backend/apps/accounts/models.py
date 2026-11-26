from django.conf import settings
from django.db import models


class AccountProfile(models.Model):
    class Role(models.TextChoices):
        CITIZEN = "citizen", "Ciudadano registrado"
        ADMINISTRATOR = "administrator", "Administrador"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="account_profile",
    )
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.CITIZEN,
    )
    profile_photo = models.ImageField(
        upload_to="accounts/profile_photos/",
        blank=True,
    )
    description = models.TextField(blank=True)
    personal_data_policy_accepted_at = models.DateTimeField(
        null=True,
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "perfil de cuenta"
        verbose_name_plural = "perfiles de cuenta"
        ordering = ("user__username",)

    def __str__(self):
        return f"Perfil de {self.user.get_username()}"
