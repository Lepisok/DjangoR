from django.db import models
from uuid import uuid4


class CustomUser(models.Model):
    uid = models.UUIDField(primary_key=True, default=uuid4)
    user_name = models.CharField(max_length=64, unique=True)
    email = models.CharField(max_length=128, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
