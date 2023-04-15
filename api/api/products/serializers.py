from rest_framework import serializers
from .models import Product, Brand, ProductMInfo, ProductReview, Stock, ProductImage, Category, FilterTag, FilterOption
from django.contrib.auth import get_user_model
from decimal import Decimal

User = get_user_model()

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id','name', 'logo_path', 'full_name']

class RelatedCategory_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['fe_id', 'name']

class FilterTagForCategory_Serializer(serializers.ModelSerializer):
    class Meta:
        model = FilterTag
        fields = ['name', 'checked']

class FilterOptionForCategory_Serializer(serializers.ModelSerializer):
    tags = FilterTagForCategory_Serializer(many=True, read_only=True)

    class Meta:
        model = FilterOption
        fields = ['display_name','tags']

class IndividualCategory_Serializer(serializers.ModelSerializer):
    parent = serializers.SerializerMethodField()
    related_categories = RelatedCategory_Serializer(many=True)
    filter_options = FilterOptionForCategory_Serializer(many=True, read_only=True, source='filteroption_set')
    class Meta:
        model = Category
        fields = ['fe_id', 'name', 'desc', 'parent', 'related_categories', 'image', 'filter_options']
    
    def get_parent(self, obj):
        serializer = IndividualCategory_Serializer(obj.parent)
        return serializer.data
    
class Categories_Serializers(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField()
    parent = IndividualCategory_Serializer()

    class Meta:
        model = Category
        fields = ['fe_id', 'name', 'desc', 'parent', 'subcategories']

    def get_subcategories(self, obj):
        serializer = Categories_Serializers(obj.category_set.all(), many=True)
        return serializer.data


class ProductImage_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('uuid', 'image', 'caption', 'is_main_image')

class FilterTag_Serializer(serializers.ModelSerializer):
    filter_option = serializers.SerializerMethodField()
    class Meta:
        model = FilterTag
        fields = ['name', 'filter_option']

    def get_filter_option(self, obj):
        filter_option = obj.filter_option
        return filter_option.display_name

class ProductCard_Serializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    main_image = ProductImage_Serializer()
    total_cost = serializers.SerializerMethodField()
    days = serializers.SerializerMethodField()
    favorited = serializers.SerializerMethodField()
    filter_tags = FilterTag_Serializer(many=True)

    class Meta:
        model = Product
        fields = ['uuid', 'name', 'brand', 'slug','average_rating', 'n_ratings', 'main_image', 'base_cost', 'daily_cost', 'total_cost', 'days', 'favorited', 'filter_tags',]

    def get_total_cost(self, obj):
        if 'days' in self.context:
            days = self.context['days']
            total_cost = obj.base_cost + (obj.daily_cost * days)
            return total_cost
        else:

            return None
        
    def get_days(self, obj):
        return self.context['days']
    
    def get_favorited(self, obj):
        customer = self.context.get('request').customer
        is_favorited = obj.favorited_items.filter(customer=customer).exists()
        return is_favorited



class Product_Serializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    main_image = ProductImage_Serializer()
    images = ProductImage_Serializer(many=True)
    category = Categories_Serializers()
    frequently_bought_with = ProductCard_Serializer(many=True)
    total_cost = serializers.SerializerMethodField()
    insurance_total_cost = serializers.SerializerMethodField()
    days = serializers.SerializerMethodField()
    favorited = serializers.SerializerMethodField()

    def get_total_cost(self, obj):
        if 'days' in self.context:
            days = self.context['days']
            total_cost = obj.base_cost + (obj.daily_cost * days)
            return total_cost
        else:

            return None
    
    def get_insurance_total_cost(self,obj):
        if 'days' in self.context:
            days = self.context['days']
            total_insurance_cost = obj.insurance_base_cost + (obj.insurance_daily_cost * days)
            return total_insurance_cost
        else:
            return None
        
    def get_days(self, obj):
        return self.context['days']
    
    def get_favorited(self, obj):
        customer = self.context.get('request').customer
        is_favorited = obj.favorited_items.filter(customer=customer).exists()
        return is_favorited
    
    def get_frequently_bought_with(self, obj):
        frequently_bought_with = obj.frequently_bought_with.all()
        return self._serialize_product_cards_with_context(frequently_bought_with)

    def _serialize_product_cards_with_context(self, products):
        context = self.context
        serializer = ProductCard_Serializer(products, context=context, many=True)
        return serializer.data


    class Meta:
        model = Product
        fields = ['uuid', 'name', 'brand', 'slug', 'average_rating', 'n_ratings', 'category', 'filter_tags', 'total_cost', 'days', 'insurance_total_cost', 'main_image', 'images','frequently_bought_with', 'favorited']

    def create(self, validated_data):
        brand_data = validated_data.pop('brand')
        brand = Brand.objects.get_or_create(**brand_data)[0]
        product = Product.objects.create(brand=brand, **validated_data)

        return product
    
    def update(self, instance, validated_data):
        brand_data = validated_data.pop('brand')
        if brand_data:
            brand = instance.brand
            brand.name = brand_data.get('name', brand.name)
            brand.save()
        
        instance.name = validated_data.get('name', instance.name)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.average_rating = validated_data.get('average_rating', instance.average_rating)
        instance.n_ratings = validated_data.get('n_ratings', instance.n_ratings)

        instance.base_cost = validated_data.get('base_cost', instance.base_cost)
        instance.daily_cost = validated_data.get('daily_cost', instance.daily_cost)
        instance.insurance_base_cost = validated_data.get('insurance_base_cost', instance.insurance_base_cost)
        instance.insurance_daily_cost = validated_data.get('insurance_daily_cost', instance.insurance_daily_cost)

        instance.main_img_location = validated_data.get('main_img_location', instance.main_img_location)
        instance.img_list = validated_data.get('my_list', instance.my_list)

        instance.frequently_bought_with = validated_data.get('frequently_bought_with', instance.frequently_bought_with)

        instance.save()
        return instance


class ProductMInfo_Serializer(serializers.ModelSerializer):
    product = Product_Serializer()
    class Meta:
        model = ProductMInfo
        fields = ['product', 'main_desc', 'bullets', 'prod_desc', 'highlights', 'add_info_msrp', 'add_info_manu', 'ranking', 'rank_link', 'specs']

    def create(self, validated_data):
        return ProductMInfo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.main_desc = validated_data.get('main_desc', instance.main_desc)
        instance.bullets = validated_data.get('bullets', instance.bullets)

        instance.prod_desc = validated_data.get('prod_desc', instance.prod_desc)
        instance.highlights = validated_data.get('highlights', instance.highlights)
        instance.add_info_msrp = validated_data.get('add_info_msrp', instance.add_info_msrp)
        instance.add_info_manu = validated_data.get('add_info_manu', instance.add_info_manu)
        instance.ranking = validated_data.get('ranking', instance.ranking)
        instance.rank_link = validated_data.get('rank_link', instance.rank_link)

        instance.specs = validated_data.get('specs', instance.specs)

        instance.save()
        return instance
    
class UserName_Serialzier(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['uuid', 'first_name', 'last_name']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        last_name = data['last_name']
        if last_name:
            data['last_name'] = last_name[0]
        return data

class ProductReview_Serializer(serializers.ModelSerializer):
    user = UserName_Serialzier()

    class Meta:
        model = ProductReview
        fields = ['uuid', 'user', 'verified_purchaser', 'date_created', 'rating', 'recommended', 'header', 'body']

    def create(self, validated_data):
        return ProductReview.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.verified_purchaser = validated_data.get('verified_purchaser', instance.verified_purchaser)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.recommended = validated_data.get('recommended', instance.recommended)

        instance.header = validated_data.get('header', instance.header)
        instance.body = validated_data.get('body', instance.body)

        instance.reported = validated_data.get('reported', instance.reported)

        instance.save()
        return instance
    

class Stock_Serializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

    class Meta:
        model = Stock
        fields = ['uuid', 'name', 'sku', 'purchase_date', 'last_rented_date', 'current_location', 'rented_dates', 'condition', 'active', 'product']

    def create(self, validated_data):
        return Stock.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.purchase_date = validated_data.get('purchase_date', instance.purchase_date)
        instance.last_rented_date = validated_data.get('last_rented_date', instance.last_rented_date)

        instance.current_location = validated_data.get('current_location', instance.current_location)

        instance.rented_dates = validated_data.get('rented_dates', instance.rented_dates)

        instance.condition = validated_data.get('condition', instance.condition)
        instance.active = validated_data.get('active', instance.active)

        instance.save()
        return instance