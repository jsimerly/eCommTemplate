from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from orders.models import Cart, CartItems
from products.models import Product
from .serializers import Cart_Serializer, CartItem_Serializer


#Create your views here
class CartItemAddView(APIView):
    def post(self, request):
        customer = request.customer
        cart, _ = Cart.objects.get_or_create(customer=customer)

        cart_items_data = request.data

        cart_items = []
        for cart_item_data in cart_items_data:
            product = Product.objects.get(slug=cart_item_data['slug'])
            stock = product.stock.first()

            cart_item_data['customer'] = customer.id
            cart_item_data['base_cost'] = stock.cost
            cart_item_data['daily_cost'] = stock.cost_per_day
            cart_item_data['insurance_base_cost'] = stock.insurance_cost
            cart_item_data['insurance_daily_cost'] = stock.insurance_cost_per_day
            cart_item_data['item'] = product.id

            serializer = CartItem_Serializer(data=cart_item_data)

            if serializer.is_valid():
                cart_item = serializer.save()
                cart_item.stock.add(stock)
                cart_items.append(cart_item)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        cart.items.add(*cart_items)
        cart.save()

        serializer = CartItem_Serializer(cart_items, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class CartItemDeleteView(APIView):
    def delete(self, request, uuid):
        try:
            cart_item = CartItems.objects.get(uuid=uuid, customer=request.customer)
        except CartItems.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        cart = cart_item.cart
        cart.items.remove(cart_item)
        cart.save()

        cart_item.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


    
class CartView(APIView):
    def get(self, request):
        cart_items = Cart.objects.filter(user=request.user).prefetch_related('items__item')
        serializer = Cart_Serializer(cart_items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

