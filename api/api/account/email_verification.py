from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site


def send_verification(user, request, token):
    SUBJECT = 'Welcome to Blue Elf: Activate Now!'
    FROM_EMAIL = 'activate@goblueelf.com'

    current_site = get_current_site(request)

    body = render_to_string('verification_email.html', {
        'domain' : current_site,
        'verification_token' : token 
    })

    recipient_list = [user.email]

    send_mail(SUBJECT, body, FROM_EMAIL, recipient_list)

    




