from django.urls import path
from customer.views import BrowsingHistoryView

urlpatterns = [
    path('history/', BrowsingHistoryView.as_view(), name='browser_history'),
]