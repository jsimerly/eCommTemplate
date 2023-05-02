from django.db import models
from uuid import uuid4
from products.models import Product, Stock
from customer.models import Customer
from django.contrib.postgres.fields import DateRangeField
from django.contrib.auth import get_user_model
from orders import promo_validators

User = get_user_model()

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=10)
    country = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.street}, {self.city}, {self.state} {self.postal_code}, {self.country}'
    
class Promo(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=60)
    description = models.TextField()
    start_date = models.DateTimeField(null=True)
    end_date = models.DateTimeField(null=True)
    code = models.CharField(max_length=20, unique=True, null=True, blank=True)
    auto_apply = models.BooleanField(default=False)

    free_items = models.ManyToManyField(
        Product, 
        through='FreeItemPromo', 
        through_fields=('promo', 'item'), 
        related_name='promotions'
    )

    flat_discount = models.DecimalField(decimal_places=2, max_digits=8, default=0)
    percentage_discount = models.DecimalField(decimal_places=2, max_digits=2, default=.0)
    stacks_with_other_promos = models.BooleanField(default=False)

    validation_function_name = models.CharField(max_length=100) #use getattr and run this

    def get_validation_function(self):
        validation_function = getattr(promo_validators, self.validation_function_name)
        return validation_function
    
    def __str__(self):
        return self.name
    
class FreeItemPromo(models.Model):
    uuid = models.UUIDField(default=uuid4)
    promo = models.ForeignKey(Promo, on_delete=models.CASCADE)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    insurance_purchased = models.BooleanField(default=False)

    
class Cart(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        null=True
    )
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        null=False,
        related_name='cart'
    )

    sub_total = models.DecimalField(decimal_places=2, max_digits=8, default=0)
    insurance_total = models.DecimalField(decimal_places=2, max_digits=8, default=0)
    tax_total = models.DecimalField(decimal_places=2, max_digits=8, default=0)

    total_cost = models.DecimalField(decimal_places=2, max_digits=8, default=0)

    def __str__(self):
        return str(self.uuid) + ' - Cart Obj'

class CartItems(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        null=True
    )

    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        null=True,
        related_name='items'
    )

    insurance_purchased = models.BooleanField(default=False)

    item = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        null=True
    )

    quantity = models.PositiveIntegerField()

    def __str__(self):
        return str(self.uuid) + ' - Cart Item Obj'

class ItemFavorited(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    user = models.ForeignKey(
        User, 
        models.CASCADE, 
        null=True, 
        blank=True,
    )
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        null=True
    )

    item = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        null=True,
        related_name='favorited_items'
    )

    def __str__(self):
        return str(self.item.name) + str(self.customer.pk)

def generate_order_id():
    unique_id = uuid4().hex[:6]
    return f'{unique_id[:3]}-{unique_id[3:7]}-{unique_id[7:]}'

class FullOrder(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='orders',
        related_query_name='orders'
    )
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name='orders'
    )

    order_id = models.CharField(max_length=20, default=generate_order_id, unique=True)

    user = models.ForeignKey(User, models.CASCADE, blank=True, null=True)
    # is_over_21 = models.BooleanField(default=False)
    # phone_number = models.CharField(max_length=20, null=False)
    # email = models.EmailField(max_length=255, null=False)
    drivers_license_id = models.CharField(max_length=30, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    sub_total = models.DecimalField(decimal_places=2, max_digits=8)
    insurance_total = models.DecimalField(decimal_places=2, max_digits=8)
    tax_total = models.DecimalField(decimal_places=2, max_digits=8)

    promos = models.ManyToManyField(
        Promo, 
        related_name='order_promo',
    )

    total_cost = models.DecimalField(decimal_places=2, max_digits=8)

    are_we_transporting_initial = models.BooleanField(default=True)
    # initial_location = models.ForeignKey(
    #     Address, 
    #     on_delete=models.PROTECT,
    #     related_name='order_initial_location'
    #)
    #Once Locations are added for stores add it as an option here

    are_we_transporting_return = models.BooleanField(default=True)
    # return_location = models.ForeignKey(
    #     Address, 
    #     on_delete=models.PROTECT,
    #     related_name='order_return_location'
    # )
    #Once Locations are added for stores add it as an option here

    payment_method = models.CharField(max_length=30)
    is_paid = models.BooleanField(default=False)

    # rented_dates = DateRangeField()

    delivered = models.BooleanField(default=False)
    returned = models.BooleanField(default=False)

    def apply_promo_code(self):
        pass

    def __str__(self):
        return "Total: " + str(self.total_cost) + "- Order ID: " + self.order_id + " - Date: " + str(self.date_created)

class ItemOrder(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)

    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
    )
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    full_order = models.ForeignKey(
        FullOrder, 
        on_delete=models.CASCADE,
        related_name='item_full_order'
    )
    product = models.ForeignKey(
        Product, 
        on_delete=models.PROTECT
        ,
        related_name='item_product'
    )
    # stock = models.ForeignKey(
    #     Stock, 
    #     on_delete=models.PROTECT,
    #     related_name='item_stock'
    # )

    base_cost = models.DecimalField(decimal_places=2, max_digits=8)
    daily_cost = models.DecimalField(decimal_places=2, max_digits=8)

    insurance_purchased = models.BooleanField(default=False)
    insurance_base_cost = models.DecimalField(decimal_places=2, max_digits=8)
    insurance_daily_cost = models.DecimalField(decimal_places=2, max_digits=8)

    total_cost = models.DecimalField(decimal_places=2, max_digits=8)

    is_blueelf_transport_initial = models.BooleanField(default=True)
    # initial_location = models.ForeignKey(
    #     Address, 
    #     on_delete=models.PROTECT, 
    #     related_name='item_initial_location'
    # )
    #Once Locations are added for stores add it as an option here

    is_blueelf_transport_return = models.BooleanField(default=True)
    # return_location = models.ForeignKey(
    #     Address, 
    #     on_delete=models.PROTECT,
    #     related_name='item_return_location'
    # )
    #Once Locations are added for stores add it as an option here

    # rented_dates = DateRangeField()

    delivered = models.BooleanField(default=False)
    returned = models.BooleanField(default=False)

    def __str__(self):
        return self.product.name + ' - ' + str(self.uuid)
