from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

from products.models import Product
from products.serializers import Product_Serializer
from serializers import BrowseSession_Serializer
from models import Customer, BrowseHistory
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
        customer, created = get_or_create_customer(request)

        history = BrowseHistory.objects.filter(customer=customer).order_by('-timestamp')[:15]

        serializer = BrowseSession_Serializer(history, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)
        response.set_cookie('device', customer.device, max_age=30*24*60*60, secure=True, httponly=True)
        
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