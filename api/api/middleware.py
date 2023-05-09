from django import http
from customer.models import Customer
from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import get_token
import jwt
from api.settings import SECRET_KEY
from django.contrib.auth import get_user_model
from uuid import uuid4
from django.contrib.auth.models import AnonymousUser
from api.settings import ALLOWED_HOSTS

User = get_user_model()

import logging

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        # print('address: ' + request.META.get('REMOTE_ADDR'))
        # print('user agent: ' + request.META.get('HTTP_USER_AGENT'))
        bearer_token = None
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if auth_header and auth_header.startswith('Bearer '):
            bearer_token = auth_header[len('Bearer '):]
        print('bearer: ' + str(bearer_token))

        return response

class CsrfCookieMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        # This line ensures that the CSRF cookie is set
        get_token(request)
        return response
    
class SessionCookieMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        # This line ensures that the session cookie is set
        request.session.setdefault('_session_init', True)
        return response

class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        allowed_origins = ALLOWED_HOSTS
        
        if (request.method == "OPTIONS" and "HTTP_ACCESS_CONTROL_REQUEST_METHOD" in request.META):
            response = http.HttpResponse()
            response["Content-Length"] = "0"
            response["Access-Control-Max-Age"] = 86400

        origin = request.META.get("HTTP_ORIGIN")
        if origin in allowed_origins:
            response["Access-Control-Allow-Origin"] = origin
        else:
            response["Access-Control-Allow-Origin"] = allowed_origins[0]

        response["Access-Control-Allow-Methods"] = "DELETE, GET, OPTIONS, PATCH, POST, PUT"
        response['Access-Control-Allow-Credentials'] = 'true'
        response["Access-Control-Allow-Headers"] = "accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with"

        return response


class DeviceCookieMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        
        user = AnonymousUser()
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split()[1]
            try:
                payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
                user_id = payload['user_id']
                user = User.objects.get(id=user_id)

            except jwt.exceptions.DecodeError:
                pass
            except User.DoesNotExist:
                pass
            except:
                pass

        cookie = request.COOKIES.get('device')
        created = False
        send_new = False
        if cookie is None:
            send_new = True
            cookie = str(uuid4())

        if user.is_authenticated:
            try:
                customer = user.customer
            except Customer.DoesNotExist:
                customer, created = Customer.objects.get_or_create(device=cookie)
                customer.user = user
                customer.save()
                # Handle the case where the customer does not exist
                pass
        else:
            customer, created = Customer.objects.get_or_create(device=cookie)

        request.customer = customer

        response = self.get_response(request)

        if created or send_new:
            self.attach_cookie_to_response(response, customer.device)

        return response
        
    def attach_cookie_to_response(self, response, cookie_value):
        response.set_cookie(
            'device', 
            cookie_value, 
            max_age=60 * 60 * 24 * 60, 
            httponly=True, 
            secure=True
        )
        


        


