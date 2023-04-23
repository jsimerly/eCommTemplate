from django import forms
from django.core.exceptions import ValidationError
from .models import Product

class ProductAdminForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = '__all__'

    def clean(self):
        cleaned_data = super().clean()
        category = cleaned_data.get('category')
        filter_tags = cleaned_data.get('filter_tags')

        if filter_tags:
            for filter_tag in filter_tags.all():
                if category not in filter_tag.filter_option.categories.all():
                    self.add_error('filter_tags', "FilterTag's FilterOption category must match the product's category.")


