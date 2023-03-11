from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse

from products.models import Product, Brand, ProductMInfo
from products.serializers import Product_Serializer, ProductMInfo_Serializer
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your tests here.
class ProductTests(APITestCase):
    def setUp(self):
        self.brand = Brand.objects.create(
            name = 'Test Brand',
            full_name = 'Test Brand, Inc',
            logo_path = '/test/test-logo.avif',
        )

        self.product = Product.objects.create(
            name='Test Product',
            brand=self.brand,
            slug='test-product-1',
            average_rating=4.5,
            n_ratings=10,
            category='test',
            tags=['tag1', 'tag2'],
            base_cost=10.00,
            daily_cost=1.00,
            insurance_base_cost=1.00,
            insurance_daily_cost=0.10,
            main_img_location='test1.jpg',
            img_list=['test1.jpg', 'test2.jpg'],
        )
        self.product.frequently_bought_with.set([])

        self.product2 = Product.objects.create(
            name='Test Product 2',
            brand=self.brand,
            slug='test-product-2',
            average_rating=4,
            n_ratings=0,
            category='tes2',
            tags=['tag1', 'tag2', 'tag3'],
            base_cost=5.00,
            daily_cost=0.50,
            insurance_base_cost=2.00,
            insurance_daily_cost=0.30,
            main_img_location='test1.jpg',
            img_list=['test1.jpg', 'test2.jpg'],
        )
        self.product2.frequently_bought_with.set([])

        self.product3 = Product.objects.create(
            name='Test Product 3',
            brand=self.brand,
            slug='test-product-3',
            average_rating=1.5,
            n_ratings=100,
            category='test',
            tags=['tag1', 'tag2'],
            base_cost=1.00,
            daily_cost=1.00,
            insurance_base_cost=0.00,
            insurance_daily_cost=0.10,
            main_img_location='test1.jpg',
            img_list=['test1.jpg', 'test2.jpg'],
        )
        self.product3.frequently_bought_with.set([])

        self.product_info = ProductMInfo.objects.create(
            product = self.product,
            main_desc = 'Test product description',
            bullets = ['bullet1', 'bullet2'],
            prod_desc = 'Test product detailed description',
            highlights = ['highlight1', 'highlight2'],
            add_info_msrp = 20.00,
            add_info_manu = 'Test Manufacturer',
            ranking = 1,
            rank_link = 'https://www.test.com',
            specs = {'spec1': 'value1', 'spec2': 'value2'},
        )

    def test_get_valid_product(self):
        url = reverse('product_detail', kwargs={'slug': self.product.slug})
        response = self.client.get(url)

        prod_serializer = Product_Serializer(self.product)
        prod_info_serializer = ProductMInfo_Serializer(self.product_info)

        expected_data = {
            'prod': prod_serializer.data,
            'prod_info': prod_info_serializer.data
        }

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, expected_data)

    def test_get_products_by_category(self):
        url = reverse('category_products', kwargs={'category': 'test'})
        response = self.client.get(url)
        
        products = Product.objects.filter(category='test')
        serializer_data = Product_Serializer(products, many=True).data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer_data)

    def test_get_products_by_uuids(self):

            uuids = [str(self.product.uuid), str(self.product3.uuid)]
            url = reverse('product_list') + f'?uuids={uuids[0]}&uuids={uuids[1]}'
            response = self.client.get(url)

            product1_data = response.data[0]
            self.assertEqual(product1_data['uuid'], str(self.product.uuid))
            self.assertEqual(product1_data['name'], 'Test Product')

            product3_data = response.data[1]
            self.assertEqual(product3_data['uuid'], str(self.product3.uuid))
            self.assertEqual(product3_data['name'], 'Test Product 3')

    def test_product_search_single(self):
        url = reverse('product_search')
        response = self.client.get(url, {'q': 'tag1'})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 3)

        self.assertIn(str(self.product.uuid), [item['uuid'] for item in response.data])
        self.assertIn(str(self.product2.uuid), [item['uuid'] for item in response.data])
        self.assertIn(str(self.product3.uuid), [item['uuid'] for item in response.data])

