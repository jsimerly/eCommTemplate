from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import *

urlpatterns = [
    path('create-user/', CreateUserView.as_view(), name='create_user'),
    path('email-verification/<verification_token>', EmailVerificationView.as_view(), name='email_verification' ),
    path('user-information', UserInformationView.as_view(), name='user_information'),
    path('update-user/', CreateUserView.as_view(), name='update_user'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),
    path('reset-password-validated/', ResetPasswordValidationView.as_view(), name='reset_password_validated'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]