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
        fields = ['uuid', 'email', 'first_name', 'last_name', 'date_of_birth', 'drivers_license_id', 'phone_number', 'is_email_verified', 'prefernce_recieve_emails']


class ResetPassword_Serializer(serializers.Serializer):
    email = serializers.EmailField()

            
       