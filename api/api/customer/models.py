from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from products.models import Product
from uuid import uuid4

User = get_user_model()

class Customer(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    device = models.UUIDField(default=uuid4, unique=True, null=True, blank=True)

    def __str__(self):
        if self.name:
            name = self.name
        else:
            name = self.device
        return str(name)

class BrowseHistory(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE, null=True)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-timestamp']

