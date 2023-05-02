# Generated by Django 4.1.7 on 2023-05-02 16:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_alter_supportticket_email_alter_supportticket_phone_and_more'),
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='itemorder',
            name='stock',
        ),
        migrations.AlterField(
            model_name='fullorder',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='customer.customer'),
        ),
    ]
