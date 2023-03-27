from django.urls import path
from orders.views import *

urlpatterns = [
    path('cart/items/', CartItemAddView.as_view(), name='add_cart_item'),
    path('cart/items/<uuid:uuid>/', CartItemDeleteView.as_view(), name='delete_cart_item'),
    path('cart/', CartView.as_view(), name='view_cart'),
]