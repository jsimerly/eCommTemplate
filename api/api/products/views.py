from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.contrib.postgres.search import SearchVector
from django.core.exceptions import ObjectDoesNotExist
from customer.models import BrowseHistory
from datetime import datetime
from django.utils import timezone
from django.shortcuts import get_object_or_404
import math
import random


from .models import Product, Category, ProductGrouping, Brand, ProductReview

from .serializers import Product_Serializer, ProductMInfo_Serializer, ProductCard_Serializer, ProductReview_Serializer, Categories_Serializers, IndividualCategory_Serializer, ProductGrouping_Serializer, BrandNameForFilter_Seralizer, CreateReview_Serializer

def getDateContext(request):
    date_changed_str = request.GET.get('dateChange')
    if date_changed_str:
        date_changed = date_changed_str.lower() == 'true'
    else:
        date_changed=False

    if date_changed:
        start_date_str = request.GET.get('startDate')
        end_date_str = request.GET.get('endDate')

        start_date = datetime.strptime(start_date_str, '%Y-%m-%d')
        end_date = datetime.strptime(end_date_str, '%Y-%m-%d')

        delta = end_date - start_date
        days = delta.days + 1
        context = {
            'days': days
        }
    else:
        context = {
            'days' : 7
        }

    return context
    
class CategoriesView(APIView):
    serializer_class = Categories_Serializers

    def get(self, request, fe_id):
        if fe_id is None:
            fe_id = '0000'

        category = Category.objects.get(fe_id=fe_id)
        serializer = self.serializer_class(category)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
# Create your views here.
class ProductPageView(APIView):
    def get(self, request, slug,):

        try:
            product = Product.objects.get(slug=slug)
        except:
            return Response({"error": "Product not found."}, status=status.HTTP_404_NOT_FOUND)
        
        customer = request.customer
        if customer:
            try:
                history_item, created = BrowseHistory.objects.get_or_create(customer=customer, product=product)
                if not created:
                    history_item.timestamp = timezone.now()
                    history_item.save()

            except Exception as e:
                print(f'Error trying to create browsing history: {e}')
        
        context = {
            'request' : request,
            **getDateContext(request)
        }

        prod_info_serializer = ProductMInfo_Serializer(product.product_info, context=context)

        is_favorited = product.favorited_items.filter(customer=request.customer).exists()
        
        resp_data = {
            **prod_info_serializer.data,
            'favorited': is_favorited,
        }

        return Response(resp_data, status=status.HTTP_200_OK)
    
class ProductCategoryAPIView(APIView):
    def get(self, request, category):
        context = {
            'request' : request,
            **getDateContext(request)
        }

        category_obj = Category.objects.get(fe_id=category)
        category_serializer = IndividualCategory_Serializer(category_obj, context=context)

        return Response(category_serializer.data, status=status.HTTP_200_OK)
    
class ProductAPIView(APIView):
    def get(self, request):
        context = {
            'request' : request,
            **getDateContext(request)
        }

        slug = request.GET.get('slug')
        if not slug:
            return Response({'detail': 'Missing slug'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = Product.objects.get(slug=slug)
        except ObjectDoesNotExist:
            return Response({'detail': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = Product_Serializer(product, context=context)

        is_favorited = product.favorited_items.filter(customer=request.customer).exists()
        
        resp_data = {
            **serializer.data,
            'favorited': is_favorited,
        }

        response = Response(resp_data, status=status.HTTP_200_OK)
        return response
    
class ProductListAPIView(APIView):
    def get(self, request):
        slug_strings = request.GET.get('slugs')

        context = {
            'request' : request,
            **getDateContext(request)
        }

        if slug_strings is not None:
            slugs = slug_strings.split(',')
        else:
            slugs = []

        products = Product.objects.filter(
            slug__in=slugs,
        ) 

        serializer = ProductCard_Serializer(products, context=context, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)

        return response
    
class ProductSearchView(APIView):
    def get(self, request):
        query = request.GET.get('q', '')
        search_vector = SearchVector('name', 'category', 'keywords')

        search_query = Q(name__icontains=query) | Q(category__icontains=query) | Q(tags__icontains=query)

        products = Product.objects.annotate(search=search_vector).filter(search_query).order_by('-search')

        serializer = Product_Serializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class ProductReviewsView(APIView):
    def get(self, request, slug):
        try:
            product = Product.objects.get(slug=slug)
        except Product.DoesNotExist:
            return Response({'detail': 'Product not found'}, status=404)

        reviews = product.reviews.filter(initial_review=True, comment_included=True)
        serializer = ProductReview_Serializer(reviews, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ReviewReportedView(APIView):
    def post(self, request):
        report_uuid = request.data.get('uuid')
        review = ProductReview.objects.get(uuid=report_uuid)
        review.reported=True
        review.save()
        
        return Response(status=status.HTTP_200_OK)

class CreateReviewView(APIView):
    def post(self, request):
        product_slug = request.data.get('product_slug')
        product = get_object_or_404(Product, slug=product_slug)

        data = request.data.copy()
        data['user'] = request.user.id
        data['product'] = product.id

        serializer = CreateReview_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
class ProductGroupingView(APIView):
    def get(self, request, group_name):
        context = {
            'request' : request,
            **getDateContext(request)
        }

        try:
            product_grouping = ProductGrouping.objects.get(name=group_name)
        except ProductGrouping.DoesNotExist:
            return Response({'error': 'Product group not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProductGrouping_Serializer(product_grouping, context=context)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductSuggestionView(APIView):
    def get(self, request):
        context = {
            'request' : request,
            **getDateContext(request)
        }
                
        customer = request.customer
        browse_history = BrowseHistory.objects.filter(customer=customer).order_by('-timestamp')[:20]

        products = [bh.product for bh in browse_history]
        categories = set(p.category for p in products)
        unique_categories = Category.objects.filter(id__in=[c.id for c in categories])

        num_categories = len(unique_categories)
        num_items_per_category = math.ceil(20 / num_categories)

        suggested_products = []
        for category in unique_categories:
            category_products = category.product_set.exclude(id__in=[p.id for p in products])
            num_products = category_products.count()
            if num_products < num_items_per_category:
                additional_products = category.product_set.exclude(id__in=[p.id for p in products])[:num_items_per_category - num_products]
                category_products |= additional_products
            else:
                random_indices = random.sample(range(num_products), num_items_per_category)
                category_products = category_products.filter(pk__in=[category_products[index].pk for index in random_indices])
            suggested_products.extend(category_products)

        
        
        if len(suggested_products) == 0:
            product_group = ProductGrouping.objects.get(name='most_popular_landing_page')
            suggested_products = list(product_group.products.all())

        random.shuffle(suggested_products)

        return Response(ProductCard_Serializer(suggested_products, context=context, many=True).data, status=status.HTTP_200_OK)

class ProductSearchView(APIView):
    def get(self, request):
        context = {
            'request' : request,
            **getDateContext(request)
        }
                
        search_terms = request.query_params.get('searchTerms', '').strip()
        
        products = Product.objects.annotate(
            search=SearchVector('name', 'keywords')
        ).filter(Q(search=search_terms) | Q(slug__icontains=search_terms))

        brand_ids = products.values_list('brand_id', flat=True).distinct()
        brands = Brand.objects.filter(id__in=brand_ids)

        products_serializer = ProductCard_Serializer(products, context=context, many=True)
        brand_serializer = BrandNameForFilter_Seralizer(brands, many=True)

        response_data = {
            'brands' : brand_serializer.data,
            'products' : products_serializer.data
        }

        return Response(response_data, status=status.HTTP_200_OK)
    

