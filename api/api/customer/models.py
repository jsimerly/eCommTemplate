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
    session_id = models.CharField(max_length=100, null=True, blank=True)    

    def __str__(self):
        if self.name:
            name = self.name
        else:
            name = self.device
        return str(name) + " - Customer Object"

class BrowseHistory(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-timestamp']

class LargeQuoteRequest(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    email = models.EmailField()
    phone = models.CharField(max_length=20)

class CustomerFeedback(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    date = models.DateTimeField(auto_now_add=True)

    FEEDBACK_TYPE_CHOICES = [
        ('Services', 'Services'),
        ('Products', 'Products'),
        ('Technology', 'Technology'),
        ('Other', 'Other')
    ]
    
    feedback_type = models.CharField(choices=FEEDBACK_TYPE_CHOICES, max_length=50)
    feedback = models.TextField()

class SupportTicket(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    date = models.DateTimeField(auto_now_add=True)

    SUPPORT_TYPE_CHOICES = [
        ('Service', 'Service'),
        ('Product', 'Product'),
        ('Technology', 'Technology'),
        ('Other', 'Other')
    ]
    support_type = models.CharField(choices=SUPPORT_TYPE_CHOICES, max_length=50, default='Other')

    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)

class BulkRequest(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    date = models.DateTimeField(auto_now_add=True)

    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
