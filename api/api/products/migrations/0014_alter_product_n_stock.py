# Generated by Django 4.1.7 on 2023-03-11 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0013_product_n_stock'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='n_stock',
            field=models.PositiveIntegerField(default=100),
        ),
    ]
