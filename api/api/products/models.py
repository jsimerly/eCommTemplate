from django.db import models
from uuid import uuid4
from django.db.models.signals import pre_save, post_save, m2m_changed
from django.dispatch import receiver
from django.db.models import JSONField
from django.contrib.postgres.fields import ArrayField, DateRangeField
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

User = get_user_model()

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=40)
    full_name = models.CharField(max_length=100)

    logo_path = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
def get_upload_path_cat(instance, filename):
    return f"category/{instance.name}/{filename}"
class Category(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)

    fe_id = models.CharField(max_length=4, unique=True)
    name = models.CharField(max_length=40)
    desc = models.TextField()


    parent = models.ForeignKey(
        'self',
        null=True, 
        blank=True, 
        on_delete=models.PROTECT
    )

    image = models.ImageField(upload_to=get_upload_path_cat, null=True)

    related_categories = models.ManyToManyField('self', blank=True)

    #Set the max number of related categories to 6    
    def clean(self):
        if self.related_categories.count() > 6:
            raise ValidationError("A maximum of 6 related categories is allowed.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return 'Category Obj: ' + str(self.name)
    
class FilterOption(models.Model):
    internal_name = models.CharField(max_length=60)
    display_name = models.CharField(max_length=30)

    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.internal_name
    
class FilterTag(models.Model):
    name = models.CharField(max_length=30)
    checked = models.BooleanField(default=True) #this is for if it defaults selected

    filter_option = models.ForeignKey(
        FilterOption,
        on_delete=models.CASCADE,
        related_name='tags'
    )

    def __str__(self):
        return str(self.filter_option.internal_name) + ': ' + self.name

    
class Product(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)

    #About
    name = models.CharField(max_length=120)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='prod_brand')
    slug = models.CharField(max_length=32, unique=True,)

    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
    )
    filter_tags = models.ManyToManyField(FilterTag, blank=True)

    average_rating = models.FloatField(null=True, blank=True)
    n_ratings = models.PositiveIntegerField(default=0)

    n_stock = models.PositiveIntegerField(default=100)

    #Costs
    base_cost = models.DecimalField(decimal_places=2, max_digits=8)
    daily_cost = models.DecimalField(decimal_places=2, max_digits=8)

    insurance_base_cost = models.DecimalField(decimal_places=2, max_digits=8)
    insurance_daily_cost = models.DecimalField(decimal_places=2, max_digits=8)

    #Images
    main_image = models.OneToOneField(
        'ProductImage', 
        null=True, 
        blank=True, 
        on_delete=models.SET_NULL, 
        related_name='product_as_main'
    )

    frequently_bought_with = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return  self.brand.name + " - " + self.name
    
    def add_frequently_bought_with(self, product):
        if self.frequently_bought_with.count() >= 4:
            raise ValueError('Cannot add more than 4 frequently bought with products.')
        self.frequently_bought_with.add(product)

    def clean(self):
        for filter_tag in self.filter_tags.all():
            if self.category not in filter_tag.filter_option.categories.all():
                raise ValidationError("FilterTag's FilterOption category must match the product's category.")
            
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

@receiver(post_save, sender=Product)
def set_frequently_bought_with(sender, instance, created, **kwargs):
    if created:
        instance.frequently_bought_with.add(instance)
        
@receiver(m2m_changed, sender=Product.filter_tags.through)
def validate_filter_tags(sender, instance, action, pk_set, **kwargs):
    if action in ['post_add', 'post_remove', 'post_clear']:
        for filter_tag in instance.filter_tags.all():
            if instance.category not in filter_tag.filter_option.categories.all():
                raise ValidationError("FilterTag's FilterOption category must match the product's category.")

        instance.save()


def get_upload_path_prod(instance, filename):
    return f"products/{instance.product.brand}/{instance.product.slug}/{filename}"

class ProductImage(models.Model):
    uuid = models.UUIDField(default=uuid4, unique=True)
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE,
        related_name='images'
    )
    caption = models.CharField(max_length=100, blank=True, null=True)

    image = models.ImageField(upload_to=get_upload_path_prod)
    is_main_image = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name
        
    def save(self, *args, **kwargs):
        if self.is_main_image:
            ProductImage.objects.filter(product=self.product, is_main_image=True).exclude(pk=self.pk).update(is_main_image=False)
            print(self.product)
            self.product.main_image = self

        super().save(*args, **kwargs)
        
        if self.is_main_image:
            self.product.save()
    
class ProductMInfo(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='product_info')

    #Main Card
    def validate_max_desc(text):
        if len(text) > 300:
            raise ValueError('The max length for main_desc is 200 characters.')

    main_desc = models.TextField(validators=[validate_max_desc])
    bullets = ArrayField(models.CharField(max_length=40), default=list)

    #Details Section
    prod_desc = models.TextField()
    highlights = ArrayField(models.CharField(max_length=100))
    add_info_msrp = models.DecimalField(decimal_places=2, max_digits=8)
        #brand already included in Prod
    add_info_manu = models.CharField(max_length=20)
    ranking = models.IntegerField(null=True, blank=True)
    rank_link = models.CharField(max_length=60, null=True, blank=True)
        #sku already included
    
    specs = JSONField()

    def __str__(self):
        return  self.product.brand.name + " - " + self.product.name + " Information"

class ProductReview(models.Model):  
    uuid = models.UUIDField(default=uuid4, editable=False)

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')

    user = models.ForeignKey(User, models.CASCADE)
    verified_purchaser = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)


    RATING_CHOICES = [(1, 1), (2, 2), (3, 3), (4, 4),(5, 5)]
    rating = models.PositiveIntegerField(choices=RATING_CHOICES)
    recommended = models.BooleanField(default=True)

    header = models.CharField(max_length=30)
    body = models.TextField()

    reported = models.BooleanField(default=False)

    def __str__(self):
        return  self.user.first_name + "'s Review of " + self.product.name + " - " + self.date_created.strftime('%m-%d-%Y')
    
class Stock(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=120, blank=True)

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='stock')
    sku = models.CharField(max_length=120, unique=True, editable=False)

    purchase_date = models.DateField()
    last_rented_date = models.DateField(null=True, blank=True)

    current_location = models.CharField(max_length=30, default="Myrtle Beach, NC") #this will hookin to a Locations Model down the line
    rented_dates = ArrayField(DateRangeField(), null=True, blank=True)

    CONDITION_CHOICES = (
        ('D' , 'Damaged'),
        ('P', 'Poor'),
        ('F', 'Fair'),
        ('G', 'Good'),
        ('N', 'New')
    )
    condition = models.CharField(max_length=1, choices=CONDITION_CHOICES, default='N')
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.sku
    
    def save(self, *args, **kwargs):
        self.name = self.product.name + " " + str(self.uuid)
        super().save(*args, **kwargs)
    

@receiver(pre_save, sender=Stock)
def generate_sku_upc(sender, instance, **kwargs):
    if not instance.sku:
        sku_prefix = instance.product.slug
        sku_id = Stock.objects.filter(product=instance.product).count()

        while True:
            sku_id += 1
            sku_id_str = f"{sku_id:04d}"
            sku = f"{sku_prefix}-{sku_id_str}"
            try:
                Stock.objects.get(sku=sku)
            except Stock.DoesNotExist:
                instance.sku = sku
                break




