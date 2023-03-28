from products.serializers import ProductCard_Serializer, ProductImage_Serializer

from rest_framework import serializers
from orders.models import Cart, CartItems, Stock, ItemFavorited
from products.models import Product

class CartCard_Serializer(serializers.ModelSerializer):
    main_image = ProductImage_Serializer()
    item_cost = serializers.SerializerMethodField()
    insurance_cost = serializers.SerializerMethodField()


    def get_item_cost(self, obj):
        item_cost = obj.base_cost + (obj.daily_cost * self.context['days'])
        return item_cost
    def get_insurance_cost(self, obj):
        insurance_cost = obj.insurance_base_cost + (obj.insurance_daily_cost * self.context['days'])
        return insurance_cost
        
    class Meta:
        model = Product
        fields = ['uuid', 'name', 'brand', 'slug', 'main_image', 'item_cost', 'insurance_cost',]

class CartItem_Serializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField('get_item')
    class Meta:
        model = CartItems
        fields = ['uuid', 'insurance_purchased', 'item', 'quantity']

    def get_item(self, obj):
        serializer = CartCard_Serializer(obj.item, context=self.context)
        return serializer.data

class Cart_Serializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField('get_items')
    days = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ['uuid', 'user', 'customer', 'sub_total', 'insurance_total', 'tax_total', 'promos', 'total_cost', 'items', 'days']

    def get_items(self, obj):
        items = CartItems.objects.all().filter(cart=obj)
        serializer = CartItem_Serializer(items, many=True, context=self.context)
        return serializer.data
    
    def get_days(self, obj):
        return self.context['days']

    
class AddFavorite_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ItemFavorited
        fields = ['uuid', 'user', 'customer', 'item']