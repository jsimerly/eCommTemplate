from django.urls import path
from .views import ProductPageView, ProductCategoryAPIView, ProductListAPIView, ProductSearchView

urlpatterns = [
    path('slug/<slug:slug>/', ProductPageView.as_view(), name='product_detail'),
    path('category/<str:category>/', ProductCategoryAPIView.as_view(), name='category_products'),
    path('products/list/', ProductListAPIView.as_view(), name='product_list'),
    path('products/search/', ProductSearchView.as_view(), name='product_search'),
]