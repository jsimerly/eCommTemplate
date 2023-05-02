from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Address)
admin.site.register(Promo)
admin.site.register(Cart)
admin.site.register(CartItems)
admin.site.register(ItemFavorited)
admin.site.register(FullOrder)
admin.site.register(ItemOrder)
admin.site.register(FreeItemPromo)
