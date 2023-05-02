from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from orders.models import Cart, CartItems, ItemFavorited, Promo, FullOrder, ItemOrder
from products.models import Product
from django.db.models import Count
from orders.serializers import Cart_Serializer, Promo_Serializer
from products.views import getDateContext
from products.serializers import ProductCard_Serializer
from django.contrib.auth.models import AnonymousUser
from decimal import Decimal, ROUND_HALF_UP


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
            insurance_purchased = cart_item_data.get('insurancePurchased') or False

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
                        insurance_purchased = insurance_purchased,
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
        
class CartItemInsuranceUpdatedView(APIView):
    def put(self, request):
        uuid = request.data.get('uuid')
        insurance_purchased = request.data.get('insurance_purchased')

        try:
            cart_item = CartItems.objects.get(uuid=uuid)
            cart_item.insurance_purchased = insurance_purchased
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
            is_validated, message = validator_function(cart=cart, user=request.user, context=context)

            print(validator_function)
            if is_validated:
                serializer = Promo_Serializer(promo, context=context)
                return Response(serializer.data, status=status.HTTP_200_OK)
            
            return Response({'error' : message}, status=status.HTTP_400_BAD_REQUEST)
        
        except Promo.DoesNotExist:
            return Response({'error': 'We could not find this Promo Code.'}, status=status.HTTP_404_NOT_FOUND)
        
class CheckoutView(APIView):
    def post(self, request):
        date_cont = getDateContext(request)
        print(date_cont)
        context = {
            'request' : request,
            **date_cont
        }
        #days sent
        #Where sent
        #customer sent / tie to cart
        #promo code sent
        customer = request.customer
        cart = Cart.objects.get(customer=customer)

        if isinstance(request.user, AnonymousUser):
            request.user = None

        full_order = FullOrder(
            user=request.user,
            customer=customer,
        )

        subtotal = 0
        insurance_total = 0
    
        items = CartItems.objects.filter(cart=cart)
        item_orders = []
        for item in items:
            #check the stock
            product = item.item
            quantity = item.quantity
            insurance_purchased = item.insurance_purchased

            base_cost = product.base_cost
            daily_cost = product.daily_cost
            insurance_base_cost = product.insurance_base_cost
            insurance_daily_cost = product.insurance_daily_cost
            
            item_total = ((daily_cost * date_cont['days']) + base_cost)
            cost =  item_total * quantity
            subtotal += cost

            item_insurance_total = 0
            if insurance_purchased:
                item_insurance_total = ((insurance_daily_cost * date_cont['days']) + insurance_base_cost)
                insurance_cost =  item_insurance_total * quantity
                insurance_total += insurance_cost

            for i in range(0,quantity):
                #tie to stock eventually and return error if we run out of stock.
                item_order = ItemOrder(
                    customer=customer,
                    full_order=full_order,
                    product=product,
                    insurance_purchased=insurance_purchased,
                    #saving these incase the product price changes we'll have record of sale price
                    base_cost=base_cost,
                    daily_cost=daily_cost,
                    insurance_base_cost=insurance_base_cost,
                    insurance_daily_cost=insurance_daily_cost,
                    total_cost= item_insurance_total + item_total,
                )
                item_orders.append(item_order)

        TAX_RATE = Decimal('.07')
        TWO_PLACES = Decimal('.01')
        tax_total = (subtotal + insurance_total) * TAX_RATE
        tax_total = tax_total.quantize(TWO_PLACES, rounding=ROUND_HALF_UP)
        total_cost = tax_total + insurance_total + subtotal



        full_order.total_cost = total_cost
        full_order.tax_total = tax_total
        full_order.sub_total = subtotal
        full_order.insurance_total = insurance_total
        full_order.save()

        ItemOrder.objects.bulk_create(item_orders)
        #delete the cart items

        
        return Response(status=status.HTTP_200_OK)
        



