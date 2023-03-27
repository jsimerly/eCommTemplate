from products.serializers import Stock_Serializer

from rest_framework import serializers
from orders.models import Cart, CartItems, Stock

class CartItem_Serializer(serializers.ModelSerializer):
    item = Stock_Serializer()

    class Meta:
        model = CartItems
        fields = ['uuid', 'base_cost', 'daily_cost', 'insurance_purchased', 'insurance_base_cost', 'insurance_daily_cost', 'promos', 'item']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        cart_item = CartItems.objects.create(**validated_data)
        for item_data in items_data:
            stock_id = item_data.pop('id')
            stock = Stock.objects.get(id=stock_id)
            cart_item.item.add(stock, **item_data)
        return cart_item
    
class Cart_Serializer(serializers.ModelSerializer):
    items = CartItem_Serializer(many=True)

    class Meta:
        model = Cart
        fields = ['uuid', 'user', 'customer', 'sub_total', 'insurance_total', 'tax_total', 'promos', 'total_cost', 'items']

    def create(self, validated_data):
        cart_items_data = validated_data.pop('items')
        cart = Cart.objects.create(**validated_data)
        for cart_item_data in cart_items_data:
            items_data = cart_item_data.pop('items')
            cart_item = CartItems.objects.create(cart=cart, **cart_item_data)
            for item_data in items_data:
                stock_id = item_data.pop('id')
                stock = Stock.objects.get(id=stock_id)
                cart_item.item.add(stock, **item_data)
        return cart