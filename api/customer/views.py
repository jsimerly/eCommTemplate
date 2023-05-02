from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from products.serializers import ProductCard_Serializer
from customer.models import Customer, BrowseHistory
from customer.serializers import LargeQuoteRequestSerializer, CustomerFeedbackSerializer, SupportTicketSerializer, BulkRequestSerializer
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
    
class CreateLargeQuoteRequestView(APIView):
    def post(self, request):
        data = request.data.copy()
        data['customer'] = request.customer.id
        serializer = LargeQuoteRequestSerializer(data=data)
        if serializer.is_valid():
            instance = serializer.save()
            serialized_data = serializer.data
            serialized_data['id'] = instance.id
            return Response(serialized_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class CreateCustomerFeedbackView(APIView):
    def post(self, request):
        data = request.data.copy()
        data['customer'] = request.customer.id
        serializer = CustomerFeedbackSerializer(data=data)
        if serializer.is_valid():

            instance = serializer.save()
            serialized_data = serializer.data
            serialized_data['id'] = instance.id
            return Response(serialized_data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CreateSupportTicketView(APIView):
    def post(self, request):
        data = request.data.copy()
        data['customer'] = request.customer.id
        serializer = SupportTicketSerializer(data=data)
        if serializer.is_valid():
            instance = serializer.save()
            serialized_data = serializer.data
            serialized_data['id'] = instance.id
            return Response(serialized_data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class BulkRequestView(APIView):
    def post(self, request):
        data = request.data.copy()
        data['customer'] = request.customer.id
        serializer = BulkRequestSerializer(data=data)
        if serializer.is_valid():
            instance = serializer.save()
            serialized_data = serializer.data
            serialized_data['id'] = instance.id
            return Response(serialized_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)