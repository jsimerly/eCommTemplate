from products.serializers import ProductCard_Serializer, ProductImage_Serializer

from rest_framework import serializers
from orders.models import Cart, CartItems, Promo, ItemFavorited, FreeItemPromo
from products.models import Product

class CartCard_Serializer(serializers.ModelSerializer):
    main_image = ProductImage_Serializer()        
    class Meta:
        model = Product
        fields = ['uuid', 'name', 'brand', 'slug', 'main_image', 'daily_cost', 'base_cost', 'insurance_base_cost', 'insurance_daily_cost']

class CartItem_Serializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField('get_item')
    days = serializers.SerializerMethodField()    
    class Meta:
        model = CartItems
        fields = ['uuid', 'insurance_purchased', 'item', 'quantity', 'days']

    def get_item(self, obj):
        serializer = CartCard_Serializer(obj.item, context=self.context)
        return serializer.data
    
    def get_days(self, obj):
        return self.context['days']

class Cart_Serializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField('get_items')
    promos = serializers.SerializerMethodField('get_promos')
    days = serializers.SerializerMethodField()
    
    class Meta:
        model = Cart
        fields = ['uuid', 'user', 'customer', 'sub_total', 'insurance_total', 'tax_total', 'total_cost', 'items', 'days', 'promos']

    def get_items(self, obj):
        items = CartItems.objects.filter(cart=obj)
        serializer = CartItem_Serializer(items, many=True, context=self.context)
        return serializer.data
    
    def get_promos(self, obj):
        request = self.context['request']
        user = request.user

        auto_add_promos = Promo.objects.filter(auto_apply=True)
        validated_promos = []
        for promo in auto_add_promos:
            validator_function = promo.get_validation_function()
            is_validated = validator_function(cart=obj, user=user, context=self.context)

            if is_validated:
                validated_promos.append(promo)

        serializer = Promo_Serializer(validated_promos, many=True, context=self.context)
        return serializer.data
        

    def get_days(self, obj):
        return self.context['days']

class AddFavorite_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ItemFavorited
        fields = ['uuid', 'user', 'customer', 'item']

class FreeItem_Serializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField('get_item')
    days = serializers.SerializerMethodField()
    class Meta:
        model = FreeItemPromo
        fields = ['uuid', 'promo', 'item', 'quantity', 'days', 'insurance_purchased']

    def get_item(self, obj):
        serializer = CartCard_Serializer(obj.item, context=self.context)
        return serializer.data
    
    def get_days(self, obj):
        return self.context['days']
    

class Promo_Serializer(serializers.ModelSerializer):
    free_items = serializers.SerializerMethodField('get_free_items')
    class Meta:
        model = Promo
        fields = ['uuid', 'name', 'description', 'code', 'free_items', 'flat_discount', 'percentage_discount']

    def get_free_items(self, obj):
        free_items = FreeItemPromo.objects.filter(promo=obj)
        serializer = FreeItem_Serializer(free_items, many=True, context=self.context)
        return serializer.data
    



