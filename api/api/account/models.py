from uuid import uuid4
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from datetime import datetime

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

    def create_superuser(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("User must have an email address")

        user = self.model(
            email = self.normalize_email(email),
            **kwargs
        )

        user.set_password(password)

        user.date_of_birth = datetime.now()

        user.is_admin = True
        user.is_staff = True
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
    REQUIRED_FIELDS = ['first_name', 'last_name']

    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    #Preferences
    prefernce_recieve_emails = models.BooleanField(default=False)

    objects = UserManager()

    #Cookies

    #Functnions
    def get_full_name(self):
        pass

    def get_short_name(self):
        pass

    @property
    def is_superuser(self):
        return self.is_admin

    @property
    def is_staff(self):
       return self.is_admin

    def has_perm(self, perm, obj=None):
       return self.is_admin

    def has_module_perms(self, app_label):
       return self.is_admin

    @is_staff.setter
    def is_staff(self, value):
        self._is_staff = value


    
    def __str__(self):
        return self.email




