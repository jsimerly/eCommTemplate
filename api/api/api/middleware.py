from django import http
from customer.models import Customer
from rest_framework.response import Response
from rest_framework import status

class CorsMiddleware(object):
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

class DeviceCookieMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        new_customer = None

        if 'device' not in request.COOKIES:
            new_customer = Customer.objects.create()

            response.set_cookie('device', new_customer.device, max_age=5000, httponly=True)

            if 'Access-Control-Expose-Headers' in response:
                response['Access-Control-Expose-Headers'] += ', Set-Cookie'
            else:
                response['Access-Control-Expose-Headers'] = 'Set-Cookie'
    
        request.new_customer = new_customer
        return response
        
        


        


