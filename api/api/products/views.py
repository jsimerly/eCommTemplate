from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.contrib.postgres.search import SearchVector

from .product_models import Product
from .customer_models import Customer, BrowseSession
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
        # Get the list of UUIDs from the query parameters
        uuids = request.GET.getlist('uuids')

        # Retrieve the matching Product objects from the database
        products = Product.objects.filter(uuid__in=uuids)

        # Serialize the products and return them in the response
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
    
class BrowsingHistoryView(APIView):
    def get(self, request):
        try: 
            customer = request.user.customer
        except:
            device = request.COOKIES['device']
            customer = Customer.objects.get_or_create(device=device)
    
        history = BrowseSession.objects.filter(customer=customer).order_by('-timestamp')[:15]

        serializer = BrowseSession(history, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ContinueShopping(APIView):
    def get_categories(request):
        try: 
            customer = request.user.customer
        except:
            device = request.COOKIES['device']
            customer = Customer.objects.get_or_create(device=device)

        history = BrowseSession.objects.filter(customer=customer).order_by('-timestamp')[:15]
        categories = Product.objects.filter(browsesession__in=history).values('category').distinct()
        related_products = Product.objects.filter(Q(category__in=categories)).order_by('?')[:15]

        serializer = Product_Serializer(related_products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

