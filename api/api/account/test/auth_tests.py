from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()

class AuthTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email='testuser@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User',
            date_of_birth='1997-05-31'
        )
    
    def test_login_auth(self):
        url = reverse('token_obtain_pair')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_login_auth_wrong_password(self):
        url = reverse('token_obtain_pair')
        data = {
            'email': 'testuser@example.com',
            'password': 'wrong_password'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    
    def test_login_auth_wrong_email(self):
        url = reverse('token_obtain_pair')
        data = {
            'email': 'wrongemail@example.com',
            'password': 'testpassword'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_token_refresh(self):
        pair_url = reverse('token_obtain_pair')
        login_data = {
            'email': 'testuser@example.com',
            'password': 'testpassword'
        }
        login_response = self.client.post(pair_url, login_data, format='json')
        self.assertEqual(login_response.status_code, status.HTTP_200_OK)
        self.assertIn('access', login_response.data)
        self.assertIn('refresh', login_response.data)

        refresh_url = reverse('token_refresh')
        data = {
            'refresh': login_response.data['refresh']
        }

        refresh_response = self.client.post(refresh_url, data, format='json')
        self.assertEqual(refresh_response.status_code, status.HTTP_200_OK)
        self.assertIn('access', refresh_response.data)

    
