from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from orders.models import Cart, CartItems, ItemFavorited, Promo
from products.models import Product
from django.db.models import Count
from orders.serializers import Cart_Serializer, Promo_Serializer
from products.views import getDateContext
from products.serializers import ProductCard_Serializer
from django.contrib.auth.models import AnonymousUser


#Create your views here
class CartItemAddView(APIView):
    def post(self, request):

        customer = request.customer
        cart, _ = Cart.objects.get_or_create(customer=customer)

        cart_items_data = request.data
        cart_items = []

        for cart_item_data in cart_items_data:
            product = Product.objects.get(slug=cart_item_data['slug'])
            quantity = cart_item_data.get('quantity') or 1

            existing_cart_item = cart.items.filter(item=product).first()


            if existing_cart_item:
                existing_cart_item.quantity += quantity
                existing_cart_item.save()
                cart_items.append(existing_cart_item)
               
            else:
                if isinstance(request.user, AnonymousUser):
                    request.user = None

                try:
                    cart_item = CartItems.objects.create(
                        user=request.user,
                        customer=customer,

                        cart = cart,
                    
                        item = product,
                        quantity = quantity,
                    )
                    cart_items.append(cart_item)
                except Exception as e:
                    print(e)
                    return Response(status=status.HTTP_400_BAD_REQUEST)               

        cart.items.add(*cart_items)
        cart.save()
        cart_size = CartItems.objects.filter(customer=customer).aggregate(size=Count('id'))['size'] or 0

        return Response({'cart_size' : cart_size},status=status.HTTP_201_CREATED)
    
class CartItemQuantityUpdateView(APIView):
    def put(self, request):
        uuid = request.data.get('uuid')
        quantity = request.data.get('quantity')

        try:
            cart_item = CartItems.objects.get(uuid=uuid)
            cart_item.quantity = quantity
            cart_item.save()
            return Response(status=status.HTTP_200_OK)

        except CartItems.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class CartItemDeleteView(APIView):
    def delete(self, request, uuid):
        customer = request.customer

        try:
            cart_item = CartItems.objects.get(uuid=uuid, customer=customer)
        except CartItems.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        cart = cart_item.cart
        cart.items.remove(cart_item)
        cart.save()

        cart_item.delete()
        cart_size = CartItems.objects.filter(customer=customer).aggregate(size=Count('id'))['size'] or 0
        print(cart_size)
        return Response({'cart_size' : cart_size},status=status.HTTP_200_OK)
    
class CartView(APIView):
    def get(self, request):
        context = {
            'request' : request,
            **getDateContext(request)
        }
        
        cart, created = Cart.objects.get_or_create(customer=request.customer)
        if created:
            return Response({'error' : 'Your Cart is Empty'}, status=status.HTTP_204_NO_CONTENT)
        
        serializer = Cart_Serializer(cart, context=context)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class AddFavoritedItemView(APIView):
    def post(self, request, slug):
        customer = request.customer
        product = Product.objects.get(slug=slug)

        item_favorited, created = ItemFavorited.objects.get_or_create(customer=customer,item=product)
        
        if created:
            return Response({'message' : 'Item Added to Favorites', 'favorited':True},status=status.HTTP_200_OK)

        item_favorited.delete()
        return Response({'message' : 'Item Removed from Favorites', 'favorited':False},status=status.HTTP_200_OK)
    
class FavoritedItemsView(APIView):
    def get(self, request):
        customer = request.customer 

        items_favorited = ItemFavorited.objects.filter(customer=customer).prefetch_related('item')
        products = [favorite.item for favorite in items_favorited]

        context = {
            'request' : request,
            **getDateContext(request)
        }

        serializer = ProductCard_Serializer(products, context=context, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class FavoriteItemDeleteView(APIView):
    def delete(self, request, uuid):
        customer = request.customer

        try:
            favorited_item = ItemFavorited.objects.get(item__uuid=uuid, customer=customer)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        favorited_item.delete()
        return Response(status=status.HTTP_200_OK)

    
class CartSizeView(APIView):
    def get(self, request):
        customer = request.customer
        cart_size = CartItems.objects.filter(customer=customer).aggregate(size=Count('id'))['size'] or 0
        return Response({'cart_size': cart_size}, status=status.HTTP_200_OK)

class PromoCodeView(APIView):
    serializer = Promo_Serializer()

    def get(self, request, code):
        context = {
            'request' : request,
            **getDateContext(request)
        }
        customer = request.customer
        try:
            promo = Promo.objects.get(code=code)
            cart = Cart.objects.get(customer=customer)

            validator_function = promo.get_validation_function()
            is_validated = validator_function(cart=cart, user=request.user, context=context)

            if is_validated:
                serializer = Promo_Serializer(promo, context=context)
                return Response(serializer.data, status=status.HTTP_200_OK)
            
            return Response({'error' : 'Your current cart does not qualify for this promotion. You need to spend at least $70.'}, status=status.HTTP_400_BAD_REQUEST)
        
        except Promo.DoesNotExist:
            return Response({'error': 'Promo not found'}, status=status.HTTP_404_NOT_FOUND)


