# Generated by Django 4.1.7 on 2023-03-11 04:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_product_n_ratings'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='my_list',
            new_name='img_list',
        ),
    ]