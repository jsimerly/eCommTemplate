from customer.models import BrowseHistory, LargeQuoteRequest, CustomerFeedback, SupportTicket, BulkRequest
from rest_framework import serializers
from products.serializers import ProductCard_Serializer

class BrowseSession_Serializer(serializers.ModelSerializer):
    product = ProductCard_Serializer()
    class Meta:
        model = BrowseHistory
        fields = ['user', 'product', 'timestamp', ]

class LargeQuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LargeQuoteRequest
        fields = ['user', 'customer', 'date', 'email', 'phone']

class CustomerFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerFeedback
        fields = ['user', 'customer', 'date', 'feedback_type', 'feedback']

class SupportTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportTicket
        fields = ['user', 'customer', 'date', 'support_type', 'email', 'phone']

class BulkRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = BulkRequest
        fields = ['user', 'customer', 'date', 'email', 'phone']

    