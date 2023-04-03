from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
from uuid import uuid4

from account.verification import send_email_verification, send_password_reset_verification
from account.serializers import *

# Create your views here.
class CreateUserView(APIView):
    serialzier_class = CreateUser_Serializer

    def post(self, request, format='json'):
        data = request.data.copy()
        try:
            data['date_of_birth'] = datetime.strptime(data['date_of_birth'], '%Y-%m-%d').date()
        except Exception as error:
            return Response({'error' : str(error)}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serialzier_class(data=request.data)

        if serializer.is_valid():
            verification_token = uuid4().hex
            serializer.save(verification_token = verification_token)

            # send_verification(user, request, verification_token) turn on when email server is responding again
            print('usually send email verification here, currently commented out')

            return Response(serializer.data, status=status.HTTP_201_CREATED)

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
    
class UserInformationView(APIView):
    serializer_class = UserInformation_Serializer
    def get(self, request):
        if request.user.is_authenticated:
            serializer = self.serializer_class(request.user)

            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'message': 'Unauthorized'}, status=401)

class UpdateNameView(APIView):
    def put(self, request):
        user = request.user
        serializer = UpdateName_Serializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UpdateAccountView(APIView):
    def put(self, request):
        print(request.data)
        user = request.user
        serializer = UpdateAccount_Serializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UpdatePersonalView(APIView):
    def put(self, request):
        user = request.user
        serializer = UpdatePersonal_Serializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UpdatePreferencesView(APIView):
    def put(self, request):
        user = request.user
        print(request.data)
        serializer = UpdatePreferences_Serializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ResetPasswordView(APIView):
    seralizer_class = ResetPassword_Serializer

    def post(self, request):
        serializer = self.seralizer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            try:
                verification_token = uuid4().hex
                user = User.objects.get(email=email)

                user.password_reset_verification_token = verification_token
                user.save()

                # send_password_reset_verification(user, request, verification_token)
                #turn on when live on server

            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            
            return Response(status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ResetPasswordValidationView(APIView):
    pass