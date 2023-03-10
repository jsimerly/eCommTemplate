
# Create your tests here.
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from django.contrib.auth import get_user_model
from uuid import uuid4

User = get_user_model()

class UserCreateTests(APITestCase):
    def test_create_user_min_fields(self):
        url = reverse('create_user')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, 'testuser@example.com')
        #Testing if the hashing worked
        self.assertNotEqual(User.objects.get().password, 'testpassword')

        user_instance = User.objects.get(email='testuser@example.com')
        self.assertTrue(user_instance.check_password(raw_password='testpassword'))

    def test_create_user_max_fields(self):
        url = reverse('create_user')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31',
            'phone' : '317-555-8352',
            'preference_recieve_emails' : True,
        }
        
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().email, 'testuser@example.com')
        self.assertNotEqual(User.objects.get().password, 'testpassword')



        user_instance = User.objects.get(email='testuser@example.com')
        self.assertTrue(user_instance.check_password(raw_password='testpassword'))

    def test_create_user_missing_fields(self):
        url = reverse('create_user')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31',
            'phone' : '317-555-8352',
            'preference_recieve_emails' : True,
        }
        
        required_fields = ['email', 'password', 'first_name', 'last_name', 'date_of_birth']
        
        for field in required_fields:
            field_data = data.copy()
            del field_data[field]
            response = self.client.post(url, field_data, format='json')
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
            self.assertEqual(User.objects.count(), 0)

    def test_is_valid_email(self):
        url = reverse('create_user')
        data = {
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31',
            'phone' : '317-555-8352',
            'preference_recieve_emails' : True,
        }
        
        valid_emails = [
            'test@example.com',
            'test.user@example.com',
            'test123@example.com',
            'test_user123@example.com',
            'test.user+123@example.com'
        ]
        for email in valid_emails:
            field_data = data.copy()
            field_data['email'] = email
            response = self.client.post(url, field_data, format='json')
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_is_invalid_email(self):
        url = reverse('create_user')
        data = {
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31',
            'phone' : '317-555-8352',
            'preference_recieve_emails' : True,
        }

        invalid_emails = [
            '',
            'test@example',
            'test@.com',
            'test@example.',
            'test.user@example..com',
            'test@%example.com',
            'test.user#example.com'
        ]
        
        for email in invalid_emails:
            field_data = data.copy()
            field_data['email'] = email
            response = self.client.post(url, field_data, format='json')
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
            self.assertEqual(User.objects.count(), 0)

    def test_create_user_duplicate_email(self):
        User.objects.create_user(
            email='testuser@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User',
            date_of_birth='1997-05-31'
        )

        url = reverse('create_user')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)

    def test_create_user_invalid_dob_format(self):
        url = reverse('create_user')
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '05/31/1997'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 0)

    def test_email_verification(self):
        create_url = reverse('create_user')

        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31'
        }

        create_response = self.client.post(create_url, data, format='json')
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().is_email_verified, False)
        self.assertIsNotNone(User.objects.get().verification_token)
        
        verify_token = User.objects.get(email='testuser@example.com').verification_token

        verify_url = reverse('email_verification', kwargs={'verification_token': verify_token})
        verify_response = self.client.get(verify_url)
        
        self.assertEqual(verify_response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.get().is_email_verified, True)
        self.assertIsNone(User.objects.get().verification_token)

    def test_email_verification_wrong_verifcation(self):
        create_url = reverse('create_user')

        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
            'first_name': 'Test',
            'last_name': 'User',
            'date_of_birth' : '1997-05-31'
        }

        create_response = self.client.post(create_url, data, format='json')
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().is_email_verified, False)
        self.assertIsNotNone(User.objects.get().verification_token)
        
        verify_token = uuid4()

        verify_url = reverse('email_verification', kwargs={'verification_token': verify_token})
        verify_response = self.client.get(verify_url)
        
        self.assertEqual(verify_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.get().is_email_verified, False)
        self.assertIsNotNone(User.objects.get().verification_token)
