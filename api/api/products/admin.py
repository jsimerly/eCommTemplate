from django.contrib import admin
from .models import *
from .forms import ProductAdminForm

class ProductAdmin(admin.ModelAdmin):
    form = ProductAdminForm

# Register your models here.
admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductMInfo)
admin.site.register(ProductReview)
admin.site.register(ProductGrouping)
admin.site.register(Stock)
admin.site.register(ProductImage)
admin.site.register(Category)
admin.site.register(FilterOption)
admin.site.register(FilterTag)


