# Generated by Django 4.1.7 on 2023-04-20 19:38

import django.contrib.postgres.search
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_product_internal_description_product_keywords_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='internal_description',
        ),
        migrations.AlterField(
            model_name='product',
            name='search_vector',
            field=django.contrib.postgres.search.SearchVectorField(blank=True),
        ),
    ]