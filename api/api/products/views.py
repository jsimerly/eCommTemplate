from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.contrib.postgres.search import SearchVector

from .models import Product

from .serializers import Product_Serializer, ProductMInfo_Serializer

# Create your views here.
class ProductPageView(APIView):
    def get(self, request, slug,):
        try:
            product = Product.objects.get(slug=slug)
        except:
            return Response({"error": "Product not found."}, status=404)
        
        prod_serializer = Product_Serializer(product)
        prod_info_serializer = ProductMInfo_Serializer(product.productminfo)

        data = {
            'prod' : prod_serializer.data,
            'prod_info' : prod_info_serializer.data
        }
        
        return Response(data, status=status.HTTP_200_OK)
    
class ProductCategoryAPIView(APIView):
    def get(self, request, category):
        products = Product.objects.filter(category=category)
        serializer = Product_Serializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductListAPIView(APIView):
    def get(self, request):
        uuids = request.GET.getlist('uuids')

        products = Product.objects.filter(uuid__in=uuids)

        serializer = Product_Serializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ProductSearchView(APIView):
    def get(self, request):
        query = request.GET.get('q', '')
        search_vector = SearchVector('name', 'category', 'tags')

        search_query = Q(name__icontains=query) | Q(category__icontains=query) | Q(tags__icontains=query)

        products = Product.objects.annotate(search=search_vector).filter(search_query).order_by('-search')

        serializer = Product_Serializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    

