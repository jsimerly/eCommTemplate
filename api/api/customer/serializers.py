from customer.models import BrowseHistory
from rest_framework import serializers
from products.serializers import Product_Serializer
from products.models import Product

class BrowseSession_Serializer(serializers.ModelSerializer):
    product = Product_Serializer()
    class Meta:
        model = BrowseHistory
        fields = ['id', 'user', 'product', 'timestamp', ]

    # def get_items(self, obj):
    #     customer = obj.customer
    #     items = BrowseHistory.objects.filter(customer=customer).select_related('product').order_by('-timestamp')
    #     item_list = [history.product for history in items]

    #     serializer = Product_Serializer(item_list, many=True)
    #     return serializer.data
    