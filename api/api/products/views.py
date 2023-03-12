from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.contrib.postgres.search import SearchVector
from uuid import UUID

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
        prod_info_serializer = ProductMInfo_Serializer(product.product_info)

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
        uuid_strings = request.GET.getlist('uuids')
        uuids = [UUID(uuid_string) for uuid_string in uuid_strings]
        slug_strings = request.GET.get('slugs')
        if slug_strings is not None:
            slugs = slug_strings.split(',')
        else:
            slugs = []
        tags = request.GET.getlist('tags')

        print(slugs)
        products = Product.objects.filter(
            slug__in=slugs,
        )

        print(products)

        serializer = Product_Serializer(products, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK, content_type='application/json')
        response['Access-Control-Allow-Origin'] = '*'
        return response
    
class ProductSearchView(APIView):
    def get(self, request):
        query = request.GET.get('q', '')
        search_vector = SearchVector('name', 'category', 'tags')

        search_query = Q(name__icontains=query) | Q(category__icontains=query) | Q(tags__icontains=query)

        products = Product.objects.annotate(search=search_vector).filter(search_query).order_by('-search')

        serializer = Product_Serializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    

