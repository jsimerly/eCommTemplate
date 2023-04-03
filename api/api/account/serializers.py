from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class CreateUser_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = ['uuid', 'email', 'password', 'first_name', 'last_name', 'date_of_birth', 'phone_number', 'is_email_verified', 'prefernce_recieve_emails']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)

        if password is not None:
            user.set_password(password)

        user.save()
        return user
    
    def update(self, user, validated_data):
        print('GOT HERE AT')
        for key, value in validated_data.items():
            if key == 'password':
                user.set_password(value)
            else:
                setattr(user, key, value)
        user.save()
        return user
class UserInformation_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['uuid', 'email', 'first_name', 'last_name', 'date_of_birth', 'drivers_license_id', 'phone_number', 'is_email_verified', 'prefernce_recieve_emails', 'prefernce_newsletter']

class UpdateName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name',]

    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance
    
class UpdateAccount_Serializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    class Meta:
        model = User
        fields = ['email', 'phone_number', 'password']


    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            if value:
                if key=='password':
                    instance.set_password(value)
                else:
                    setattr(instance, key, value)
        instance.save()
        return instance
    
class UpdatePersonal_Serializer(serializers.ModelSerializer):
    drivers_license_id = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['date_of_birth', 'drivers_license_id',]

    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance
    
class UpdatePreferences_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['prefernce_recieve_emails', 'prefernce_newsletter',]

    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance
    

class ResetPassword_Serializer(serializers.Serializer):
    email = serializers.EmailField()

            
       