from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from uuid import uuid4
from django.urls import reverse
from django.shortcuts import redirect

from .serializers import *
from .email_verification import send_verification
# Create your views here.
class CreateUserView(APIView):
    serialzier_class = CreateUser_Serializer

    def post(self, request, format='json'):
        data = request.data.copy()
        data['date_of_birth'] = datetime.strptime(data['date_of_birth'], '%Y-%m-%d').date()

        serializer = self.serialzier_class(data=request.data)

        if serializer.is_valid():
            verification_token = uuid4().hex
            serializer.save(verification_token = verification_token)

            # send_verification(user, request, verification_token) turn on when email server is responding again

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmailVerificationView(APIView):
    def get(self, *args, **kwargs):
        verification_token = kwargs['verification_token']
        
        try:
            user = User.objects.get(verification_token=verification_token)
        except User.DoesNotExist:
            return Response({'message': 'Invalid verification token.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user.is_email_verified = True
        user.verification_token = None

        user.save()

        # return redirect('/')
        return Response({
            'message': 'Email verification successful.',
            'user': {
                'uuid': user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'email': user.email,
                'is_email_verified': user.is_email_verified
            }
        }, status=status.HTTP_200_OK)