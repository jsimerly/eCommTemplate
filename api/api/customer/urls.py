from django.urls import path
from customer.views import BrowsingHistoryView, CreateCustomerFeedbackView, CreateLargeQuoteRequestView, CreateSupportTicketView, BulkRequestView

urlpatterns = [
    path('history/', BrowsingHistoryView.as_view(), name='browser_history'),
     path('create-large-quote-request/', CreateLargeQuoteRequestView.as_view(), name='create_large_quote_request'),
    path('create-customer-feedback/', CreateCustomerFeedbackView.as_view(), name='create_customer_feedback'),
    path('create-support-ticket/', CreateSupportTicketView.as_view(), name='create_support_ticket'),
    path('create-bulk-request/', BulkRequestView.as_view(), name='bulk_request'),
]