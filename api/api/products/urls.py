from django.urls import path
from .views import ProductPageView, ProductCategoryAPIView, ProductListAPIView, ProductSearchView, ProductAPIView, ProductReviewsView, IndividualCategoryView, CategoriesView, ProductGroupingView, ProductSuggestionView

urlpatterns = [
    path('category_many/<fe_id>/', CategoriesView.as_view(), name='many_categories'),
    path('category_individual/<fe_id>/', IndividualCategoryView.as_view(), name='individual_categories'),

    path('slug/<slug:slug>/', ProductPageView.as_view(), name='product_detail'),
    path('category/<str:category>/', ProductCategoryAPIView.as_view(), name='category_products'),
    path('products/list/', ProductListAPIView.as_view(), name='product_list'),
    path('products/info/', ProductAPIView.as_view(), name='product_info'),
    path('search/', ProductSearchView.as_view(), name='product_search'),

    path('products/<slug:slug>/reviews/', ProductReviewsView.as_view(), name='product_review_list'),

    path('product-group/<group_name>/', ProductGroupingView.as_view(), name='product_group'),
    path('product-suggestions/', ProductSuggestionView.as_view(), name='product_suggestions')
]