from django.contrib import admin
from .models import *
from .forms import ProductAdminForm

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1  # Number of empty forms displayed

class ProductMInfoInline(admin.StackedInline):
    model = ProductMInfo
    extra = 0

class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm
    inlines = [
        ProductImageInline,
        ProductMInfoInline,
    ]

# Register your models here.
admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductReview)
admin.site.register(ProductGrouping)
admin.site.register(Stock)
admin.site.register(Category)
admin.site.register(FilterOption)
admin.site.register(FilterTag)


