from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q

from products.models import Product
from products.serializers import Product_Serializer
from models import Customer, BrowseSession
# Create your views here.

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