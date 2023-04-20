from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

from products.models import Product
from products.serializers import ProductCard_Serializer
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
        products = [item.product for item in history]

        serializer = ProductCard_Serializer(products, many=True, context=context)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    