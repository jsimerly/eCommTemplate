from django.urls import path
from .views import ProductPageView, ProductCategoryAPIView, ProductListAPIView, ProductSearchView, ProductAPIView, ProductReviewsView, CategoriesView, ProductGroupingView, ProductSuggestionView, CreateReviewView, ReviewReportedView

urlpatterns = [
    path('category_many/<fe_id>/', CategoriesView.as_view(), name='many_categories'),

    path('slug/<slug:slug>/', ProductPageView.as_view(), name='product_detail'),
    path('category/<str:category>/', ProductCategoryAPIView.as_view(), name='category_products'),
    path('products/list/', ProductListAPIView.as_view(), name='product_list'),
    path('products/info/', ProductAPIView.as_view(), name='product_info'),
    path('search/', ProductSearchView.as_view(), name='product_search'),

    path('products/<slug:slug>/reviews/', ProductReviewsView.as_view(), name='product_review_list'),
    path('create-review/', CreateReviewView.as_view(), name='create_review'),
    path('report-review', ReviewReportedView.as_view(), name='report_view'),

    path('product-group/<group_name>/', ProductGroupingView.as_view(), name='product_group'),
    path('product-suggestions/', ProductSuggestionView.as_view(), name='product_suggestions')
]