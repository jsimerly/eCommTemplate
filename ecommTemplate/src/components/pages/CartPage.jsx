import { Favorites, CartMain, OrderSummary } from "../cart"
import { BrowsingHistory} from "../shopping"

import { fetchCart } from '../../api/fetchCart';
import { useEffect, useState } from 'react';

import { useContext } from "react";
import { ShoppingContext } from "../../context";


const CartPage = () => {

    const {selectedDateRange} = useContext(ShoppingContext)
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])

    const updateCartItem = (itemUUID, updateProperties) => {
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

    const deleteCartItem = (itemUUID) => {
        setItems((items) => {
            const updatedItems = [...items]
            const itemIndex = updatedItems.findIndex((item) => item.uuid === itemUUID)
            updatedItems.splice(itemIndex, 1)

            return updatedItems
        })
    }

    useEffect(() => {
    const startDate = selectedDateRange.startDate
    const endDate = selectedDateRange.endDate
    const dateChange = selectedDateRange.first

      fetchCart(setCart, startDate, endDate, dateChange)
    }, [selectedDateRange])

    useEffect(() => {
        setItems(cart.items)
      }, [cart])

    const getCost = (item) => {
    const itemTotalCost = (parseFloat(item.item.base_cost) + (parseFloat(item.item.daily_cost) * parseInt(item.days)))
    const totalCost = item.quantity * itemTotalCost

    return  totalCost
    }
    
    const getInsurance = (item) => {
    const itemTotalCost = parseFloat(item.item.insurance_base_cost) + (parseFloat(item.item.insurance_daily_cost) * parseInt(item.days))
    const totalCost = item.quantity * itemTotalCost
    return  totalCost
    }

    const get_total = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += getCost(item)
            if (item.insurance_purchased){
              totalPrice += getInsurance(item)
            }
          }
        }
      
        return totalPrice
      }

    const get_subTotal = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += getCost(item)
          }
        }
      
        return totalPrice
    }

    const get_insurance_total = (items) => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            if (item.insurance_purchased){
              totalPrice += getInsurance(item)
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
                                deleteCartItem={deleteCartItem}
                                getCost={getCost}
                                getInsurance={getInsurance}
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
                    getCost={getCost}
                    selectedDateRange={selectedDateRange}
                />
            </div>
            <div>
                {/* <BrowsingHistory/> */}
            </div>
        </div>
    </div>

  )
}

export default CartPage