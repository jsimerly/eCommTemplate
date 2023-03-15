from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.contrib.postgres.search import SearchVector
from django.db.models import F, ExpressionWrapper, DecimalField
from datetime import datetime


from .models import Product

from .serializers import Product_Serializer, ProductMInfo_Serializer, ProductCard_Serializer, ProductReview_Serializer

def getDateContext(request):
    date_changed = request.GET.get('dateChange')

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

# Create your views here.
class ProductPageView(APIView):
    def get(self, request, slug,):
        try:
            product = Product.objects.get(slug=slug)
        except:
            return Response({"error": "Product not found."}, status=404)
        
        context = getDateContext(request)
        
        prod_info_serializer = ProductMInfo_Serializer(product.product_info, context=context)

        return Response(prod_info_serializer.data, status=status.HTTP_200_OK)
    
class ProductCategoryAPIView(APIView):
    def get(self, request, category):
        products = Product.objects.filter(category__fe_id=category)
        serializer = ProductCard_Serializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductAPIView(APIView):
    def get(self, request):

        slug = request.GET.get('slug')
        product = Product.objects.get(slug=slug)

        serializer = Product_Serializer(product)

        response = Response(serializer.data, status=status.HTTP_200_OK)
        return response
    
class ProductListAPIView(APIView):
    def get(self, request):
        slug_strings = request.GET.get('slugs')

        context = getDateContext(request)

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
        search_vector = SearchVector('name', 'category', 'tags')

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

        reviews = product.reviews.all()
        serializer = ProductReview_Serializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    

