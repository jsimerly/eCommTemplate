from uuid import uuid4
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, AbstractUser

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password, **kwargs):
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            **kwargs
        )

        user.set_password(password)
        user.save()
        return user

    def create_super_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            email = self.normalize_email(email),
            **kwargs
        )

        user.is_admin = True
        user.save()
        return user

class User(AbstractBaseUser):
    uuid = models.UUIDField(default=uuid4, editable=False, unique=True)
    
    email=models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
        null=False
    )


    password=models.CharField(
        max_length=124, 
        verbose_name='password',
        null=False
    )


    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    date_of_birth = models.DateField()
    drivers_license_id = models.CharField(max_length=30, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)

    username = None

    is_email_verified = models.BooleanField(default=False)
    verification_token = models.CharField(max_length=255, null=True, blank=True)
    
    is_active = models.BooleanField(default=True)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    #Preferences
    prefernce_recieve_emails = models.BooleanField(default=False)

    #Cookies

    objects = UserManager()
    
    def __str__(self):
        return self.email




