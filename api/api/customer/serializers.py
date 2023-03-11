from .models import BrowseSession
from rest_framework import serializers
from ..products.serializers import Product_Serializer

class BrowseSession_Serializer(serializers.ModelSerializer):
    product = Product_Serializer()

    class Meta:
        model = BrowseSession
        fields = ['id', 'user', 'product', 'timestamp']