from django import http
from customer.models import Customer
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status
from django.middleware.csrf import get_token

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
        if (request.method == "OPTIONS"  and "HTTP_ACCESS_CONTROL_REQUEST_METHOD" in request.META):
            response = http.HttpResponse()
            response["Content-Length"] = "0"
            response["Access-Control-Max-Age"] = 86400
        response["Access-Control-Allow-Origin"] = "http://127.0.0.1:5173"
        response["Access-Control-Allow-Methods"] = "DELETE, GET, OPTIONS, PATCH, POST, PUT"
        response['Access-Control-Allow-Credentials'] = 'true'
        response["Access-Control-Allow-Headers"] = "accept, accept-encoding, authorization, content-type, dnt, origin, user-agent, x-csrftoken, x-requested-with"

        return response


class DeviceCookieMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        cookie = request.COOKIES.get('device')

        if cookie:
            customer, created = Customer.objects.get_or_create(device=cookie)

            if created:
                self.attach_cookie_to_response(response, customer.device)
        else:
            session = request.session.session_key
            if session:
                customer, created = Customer.objects.get_or_create(session_id=session)
            else:
                customer = Customer.objects.create()

            self.attach_cookie_to_response(response, customer.device)

        request.customer = customer
        return response
        
    def attach_cookie_to_response(self, response, cookie_value):
        response.set_cookie(
            'device', 
            cookie_value, 
            max_age=60 * 60 * 24 * 60, 
            httponly=True, 
            secure=settings.CSRF_COOKIE_SECURE
        )
        


        


