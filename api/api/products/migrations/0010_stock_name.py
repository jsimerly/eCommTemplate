# Generated by Django 4.1.7 on 2023-03-11 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_alter_productminfo_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='stock',
            name='name',
            field=models.CharField(default='yeu', max_length=60),
            preserve_default=False,
        ),
    ]