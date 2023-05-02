from rest_framework.test import APITestCase
from products.models import Product, Brand, ProductMInfo, Category, ProductReview
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()

# Create your tests here.
class ProductTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email='user@example.com',
            password='UserPassword123!',
            first_name='John',
            last_name='Doe',
            date_of_birth='1990-01-01',
        )

        self.brand = Brand.objects.create(name='Test Brand')

        self.test_category = Category.objects.create(
            fe_id='0001', 
            name='Test Category', 
            desc='This is a test category', 
            image='/test/test-logo.avif'
        )
        self.test_subcategory = Category.objects.create(
            fe_id='0002', 
            name='Test Subcategory', 
            desc='This is a test subcategory', 
            parent=self.test_category, 
            image='/test/test-logo.avif'
        )
        self.test_subsubcategory = Category.objects.create(
            fe_id='0003', 
            name='Test Subsubcategory', 
            desc='This is a test subsubcategory', 
            parent=self.test_subcategory,
            image='/test/test-logo.avif'
        )
        self.test_subcategory.related_categories.set([self.test_category, self.test_subsubcategory])

        self.brand = Brand.objects.create(
            name = 'Test Brand',
            full_name = 'Test Brand, Inc',
            logo_path = '/test/test-logo.avif',
        )

        self.product = Product.objects.create(
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
        self.product.frequently_bought_with.set([])

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
        self.product2.frequently_bought_with.set([])

        self.product3 = Product.objects.create(
            name='Test Product 3',
            brand=self.brand,
            slug='test-product-3',
            average_rating=1.5,
            n_ratings=100,
            category=self.test_category,
            base_cost='1.00',
            daily_cost='1.00',
            insurance_base_cost='0.00',
            insurance_daily_cost='0.10',
            keywords=["laptop", "computer"]
        )
        self.product3.frequently_bought_with.set([])

        self.product_info = ProductMInfo.objects.create(
            product=self.product,
            main_desc='Main description',
            bullets=['Bullet points','Bullet 2'],
            prod_desc='Product description',
            highlights=['Product highlights', 'Highlight 2'],
            add_info_msrp='100.00',
            add_info_manu='Manufacturer info',
            ranking=1,
            rank_link='Rank link',
            specs='Product specifications'
        )

        self.review1 = ProductReview.objects.create(
            product = self.product,
            user=self.user,
            verified_purchaser=False,
            rating=3,
            recommended=True,
            comment_included=True,
            header='Test Header',
            body='This is the test body',
            anonymous=True,
            initial_review=True,
            reported=False,
            report_viewed=False
        )

        self.review2 = ProductReview.objects.create(
            product = self.product,
            user=self.user,
            verified_purchaser=False,
            rating=4,
            recommended=True,
            comment_included=True,
            header='Test Header 2',
            body='This is the test body 2.',
            anonymous=True,
            initial_review=True,
            reported=False,
            report_viewed=False
        )

        self.review3 = ProductReview.objects.create(
            product = self.product,
            user=self.user,
            verified_purchaser=False,
            rating=5,
            recommended=True,
            initial_review=False,
            reported=False,
            report_viewed=False
        )


    def test_categories_view(self):
        self.test_subcategory.related_categories.set([self.test_category, self.test_subsubcategory])

        url = reverse('many_categories', args=['0001'])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['name'], 'Test Category')
        self.assertEqual(response.data['desc'], 'This is a test category')
        self.assertEqual(len(response.data['subcategories']), 1)

        subcategory_data = response.data['subcategories'][0]
        self.assertEqual(subcategory_data['name'], 'Test Subcategory')
        self.assertEqual(subcategory_data['desc'], 'This is a test subcategory')
        self.assertEqual(len(subcategory_data['subcategories']), 1)

        subsubcategory_data = subcategory_data['subcategories'][0]
        self.assertEqual(subsubcategory_data['name'], 'Test Subsubcategory')
        self.assertEqual(subsubcategory_data['desc'], 'This is a test subsubcategory')

    def test_product_category_api_view(self):
        url = reverse('category_products', args=['0001'])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['name'], 'Test Category')
        self.assertEqual(response.data['desc'], 'This is a test category')
        self.assertEqual(len(response.data['related_categories']), 1)

        related_category_data = response.data['related_categories'][0]
        self.assertEqual(related_category_data['name'], 'Test Subcategory')
        self.assertEqual(related_category_data['fe_id'], '0002')

        self.assertEqual(len(response.data['products']), 3)
        product_names = [product['name'] for product in response.data['products']]
        self.assertIn('Test Product 1', product_names)
        self.assertIn('Test Product 2', product_names)
        self.assertIn('Test Product 3', product_names)

    def test_product_page_view_success(self):
        url = reverse('product_detail', args=['test-product-1'])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['product']['name'], 'Test Product 1')
        self.assertEqual(response.data['main_desc'], 'Main description')
        self.assertListEqual(response.data['bullets'], ['Bullet points', 'Bullet 2'])
        self.assertEqual(response.data['prod_desc'], 'Product description')
        self.assertListEqual(response.data['highlights'], ['Product highlights', 'Highlight 2'])
        self.assertEqual(response.data['add_info_msrp'], '100.00')
        self.assertEqual(response.data['add_info_manu'], 'Manufacturer info')
        self.assertEqual(response.data['ranking'], 1)
        self.assertEqual(response.data['rank_link'], 'Rank link')
        self.assertEqual(response.data['specs'], 'Product specifications')

    def test_product_page_view_not_found(self):
        url = reverse('product_detail', args=['nonexistent-product'])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 404)

    def test_product_api_view_success(self):
        url = reverse('product_info')
        response = self.client.get(url, {'slug': 'test-product-1'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['name'], 'Test Product 1')
        self.assertEqual(response.data['brand']['name'], 'Test Brand')
        self.assertEqual(response.data['average_rating'], 4.5)
        self.assertEqual(response.data['n_ratings'], 10)
        self.assertEqual(response.data['favorited'], False)

    def test_product_api_view_not_found(self):
        url = reverse('product_info')
        response = self.client.get(url, {'slug': 'nonexistent-product'})
        self.assertEqual(response.status_code, 404)

    def test_product_api_view_missing_slug(self):
        url = reverse('product_info')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 400)

    def test_get_all_products_no_slugs_provided(self):
        url = reverse('product_list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)  # No slugs provided, should return 0 products

    def test_get_single_product(self):
        url = reverse('product_list')
        response = self.client.get(url, {'slugs': self.product.slug})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['slug'], self.product.slug)

    def test_get_multiple_products(self):
        url = reverse('product_list')
        response = self.client.get(url, {'slugs': f"{self.product.slug},{self.product2.slug}"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)
        slugs = [product['slug'] for product in response.data]
        self.assertIn(self.product.slug, slugs)
        self.assertIn(self.product2.slug, slugs)

    def test_get_no_products_with_non_existent_slugs(self):
        url = reverse('product_list')
        response = self.client.get(url, {'slugs': 'non-existent-slug-1,non-existent-slug-2'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)

    def test_search_products_with_keyword(self):
        url = reverse('product_search')
        response = self.client.get(url, {'q': 'sample_keyword'})
        self.assertEqual(response.status_code, 200)

        results = response.json()  # Access JSON data from the response
        expected_products = [self.product, self.product2, self.product3]

        for product in results['products']:
            self.assertTrue(
                any(
                    str(expected_product.uuid) == product['uuid']
                    for expected_product in expected_products
                )
            )

    def test_get_product_reviews(self):
        url = reverse('product_review_list', kwargs={'slug': self.product.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)

    def test_get_product_reviews_with_invalid_slug(self):
        url = reverse('product_review_list', kwargs={'slug': 'invalid-slug'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 404)