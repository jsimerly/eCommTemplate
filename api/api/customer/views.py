from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

from products.models import Product
from products.serializers import Product_Serializer
from customer.serializers import BrowseSession_Serializer
from customer.models import Customer, BrowseHistory
from products.views import getDateContext
# Create your views here.

    
def get_or_create_customer(request):
    try: 
        customer = request.user.customer
        created = False
    except:
        device = request.COOKIES['device']
        customer, created = Customer.objects.get_or_create(device=device)

    return (customer, created)
class BrowsingHistoryView(APIView):
    def get(self, request):
        customer = request.customer
        context = {
            'request' : request,
            **getDateContext(request)
        }
        
        history = BrowseHistory.objects.filter(customer=customer).order_by('-timestamp')[:15]
        product_ids = history.values_list('product_id', flat=True)
        products = Product.objects.filter(id__in=product_ids)

        serializer = Product_Serializer(products, many=True, context=context)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ContinueShopping(APIView):
    def get_categories(request):
        try: 
            customer = request.user.customer
        except:
            device = request.COOKIES['device']
            customer = Customer.objects.get_or_create(device=device)

        history = BrowseHistory.objects.filter(customer=customer).order_by('-timestamp')[:15]
        categories = Product.objects.filter(browsehistory__in=history).values('category').distinct()
        related_products = Product.objects.filter(Q(category__in=categories)).order_by('?')[:15]

        serializer = Product_Serializer(related_products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)