from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

from products.models import Product, Brand, Category
from customer.models import Customer
from orders.models import Cart, CartItems
from uuid import uuid4

User = get_user_model()
class CustomerRequestMiddleware:
    def __init__(self, customer):
        self.customer = customer

    def process_request(self, request):
        request.customer = self.customer
        return request
    
class CartItemAddViewTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email='testuser@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User',
            date_of_birth='2000-01-01'
        )

        self.brand = Brand.objects.create(name='Test Brand')

        self.test_category = Category.objects.create(
            fe_id='0001', 
            name='Test Category', 
            desc='This is a test category', 
            image='/test/test-logo.avif'
        )
        self.customer = Customer.objects.create(user=self.user)

        self.product1 = Product.objects.create(
            name='Test Product 1',
            brand=self.brand,
            slug='test-product-1',
            average_rating=4.5,
            n_ratings=10,
            category=self.test_category,
            base_cost='10.00',
            daily_cost='1.00',
            insurance_base_cost='1.00',
            insurance_daily_cost='0.10',
            keywords=["gadget", "device", "sample_keyword"]
        )

        self.product2 = Product.objects.create(
            name='Test Product 2',
            brand=self.brand,
            slug='test-product-2',
            average_rating=4,
            n_ratings=0,
            category=self.test_category,
            base_cost='5.00',
            daily_cost='0.50',
            insurance_base_cost='2.00',
            insurance_daily_cost='0.30',
            keywords=["smartphone", "mobile", "sample_keyword"]
        )

        self.cart_item_add_url = reverse('add_cart_item')  # Replace 'cart_item_add' with the actual URL name in your urls.py

    def test_add_single_item_to_cart(self):
        self.client.force_authenticate(user=self.user)
        data = [
            {
                'slug': self.product1.slug,
                'quantity': 1
            }
        ]
        response = self.client.post(self.cart_item_add_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check if the cart has been created and has the correct item
        cart = Cart.objects.filter(customer=self.customer).first()
        self.assertIsNotNone(cart)
        cart_item = cart.items.first()
        self.assertIsNotNone(cart_item)
        self.assertEqual(cart_item.item, self.product1)
        self.assertEqual(cart_item.quantity, 1)

    def test_add_multiple_items_to_cart(self):
        self.client.force_authenticate(user=self.user)

        # Assign the customer and device to the request object
        self.customer.device = uuid4()
        self.customer.save()
        
        middleware = CustomerRequestMiddleware(self.customer)
        self.client.request = middleware.process_request(self.client.request)

        data = [
            {
                'slug': self.product1.slug,
                'quantity': 1
            },
            {
                'slug': self.product2.slug,
                'quantity': 2
            }
        ]
        response = self.client.post(self.cart_item_add_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check if the cart has been created and has the correct items
        cart = Cart.objects.get(customer=self.customer)
        self.assertIsNotNone(cart)
        cart_items = cart.items.all()
        self.assertEqual(len(cart_items), 2)

        item1 = cart_items.filter(item=self.product1).first()
        self.assertIsNotNone(item1)
        self.assertEqual(item1.quantity, 1)

        item2 = cart_items.filter(item=self.product2).first()
        self.assertIsNotNone(item2)
        self.assertEqual(item2.quantity, 2)