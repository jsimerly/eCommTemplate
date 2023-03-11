# Generated by Django 4.1.7 on 2023-03-11 05:11

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_rename_prodcut_stock_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('0000', 'All Categories'), ('0100', 'All Chairs')], default='0000', max_length=4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='tags',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=30), blank=True, null=True, size=None),
        ),
    ]