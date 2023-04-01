from customer.models import BrowseHistory
from rest_framework import serializers
from products.serializers import ProductCard_Serializer
from products.models import Product

class BrowseSession_Serializer(serializers.ModelSerializer):
    product = ProductCard_Serializer()
    class Meta:
        model = BrowseHistory
        fields = ['id', 'user', 'product', 'timestamp', ]

    