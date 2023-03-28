import { Favorites, CartMain, OrderSummary } from "../cart"
import { BrowsingHistory} from "../shopping"
import { yeti45 } from '../../assets/images/products'
import { fetchCart } from '../../api/fetchCart';
import { useEffect, useState } from 'react';


const favorites = [
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test610', img: yeti45, price:'$33.33'},
]

const CartPage = () => {

    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])

    const updateCartItem = (itemUUID, updateProperties) => {
        console.log(itemUUID)
        setItems((items) => {
            const updatedItems = [...items]
            const itemIndex = updatedItems.findIndex((item) => item.uuid === itemUUID)

            if (itemIndex !== -1){
                const updatedItem = {...updatedItems[itemIndex], ...updateProperties}
                updatedItems[itemIndex] = updatedItem
            }
        return updatedItems
        })
    }

    useEffect(() => {
      fetchCart(setCart)
    }, [])

    useEffect(() => {
        setItems(cart.items)
      }, [cart])

    const get_total = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += item.item.item_cost * item.quantity;
            if (item.insurance_purchased){
              totalPrice += item.item.insurance_cost * item.quantity
            }
          }
        }
      
        return totalPrice
      }

    const get_subTotal = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += item.item.item_cost * item.quantity;
          }
        }
      
        return totalPrice
    }

    const get_insurance_total = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            if (item.insurance_purchased){
              totalPrice += item.item.insurance_cost * item.quantity
            }
          }
        }
      
        return totalPrice
    }

    const countItems = (items) => {
        let itemCount = 0
        if (items){
            for (let item of items){
                itemCount += item.quantity
            }
        }
        return itemCount
    }
    
  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full'>
            <div className='flex flex-col w-full'>
                <div className="flex flex-row">
                    <div className='rounded-md w-3/5 mt-6'>
                        <h1 className="text-[40px] font-bold leading-none pt-1">
                            Cart
                        </h1>
                        <p className="leading-none pb-1">
                            {countItems(items)} Items
                        </p>
                    </div>
                    <div className="flex justify-start items-end">
                        <div className="ml-3">
                            <h1 className="text-[30px] font-bold">
                                Order Summary
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-3">
                    <div className="w-3/5">
                        <div className='grow-0'>
                            <CartMain
                                items={items}
                                updateCartItem={updateCartItem}
                                itemCount={countItems(items)}
                                totalCost={get_total(items)}
                            />
                        </div>

                    </div>
                    <div className='w-2/5 ml-3'>
                        <OrderSummary
                            subTotal={get_subTotal(items)}
                            insuranceTotal={get_insurance_total(items)}
                            itemCount={countItems(items)}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Favorites
                    favorites={favorites}
                />
            </div>
            <div>
                <BrowsingHistory/>
            </div>
        </div>
    </div>

  )
}

export default CartPage