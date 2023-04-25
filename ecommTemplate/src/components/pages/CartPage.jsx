import { Favorites, CartMain, OrderSummary } from "../cart"
import { BrowsingHistory} from "../shopping"

import { fetchCart } from '../../api/fetchCart';
import { useEffect, useState } from 'react';

import { useContext } from "react";
import { ShoppingContext } from "../../context";

const CartPage = () => {
    const {selectedDateRange} = useContext(ShoppingContext)
    const [cart, setCart] = useState([]) //cart object
    const [items, setItems] = useState([]) //items from the cart object
    const [freeItems, setFreeItems] = useState([])
    const [activePromos, setActivePromos] = useState([])

    window.scrollTo(0,0)

    const create_updated_items = (item, items, updateProperties) => {
        const updatedItems = [...items]
            const itemIndex = updatedItems.findIndex((find_item) => find_item.uuid === item.uuid)
    
            if (itemIndex !== -1){
                const updatedItem = {...updatedItems[itemIndex], ...updateProperties}
                updatedItems[itemIndex] = updatedItem
            }
        return updatedItems
    }

    const create_deleted_items = (item, items) => {
        const updatedItems = [...items]
        const itemIndex = updatedItems.findIndex((find_item) => find_item.uuid === item.uuid)
        updatedItems.splice(itemIndex, 1)

        return updatedItems
    }

    const updateCartItem = (item, updateProperties) => {
        setItems(create_updated_items(item, items, updateProperties))
    }

    const deleteCartItem = (item) => {
        setItems(create_deleted_items(item, items))
    }

    const updateFreeItem = (freeItem, updateProperties) => {
        setFreeItems(create_updated_items(freeItem, freeItems, updateProperties))
    }

    const deleteFreeItem = (freeItem) => {
        setFreeItems(create_deleted_items(freeItem, freeItems))
    }

    const handleFetchCart = () => {

        const startDate = selectedDateRange.startDate
        const endDate = selectedDateRange.endDate
        const dateChange = selectedDateRange.first

        fetchCart(setCart, startDate, endDate, dateChange)

    }

    useEffect(() => {
        handleFetchCart()
    }, [selectedDateRange])

    useEffect(() => {
        if (cart.items){
            setItems(cart.items)
        }
        if (cart.promos){
            setActivePromos(cart.promos)
        }
      }, [cart])

      useEffect(() => {
        let newFreeItems = []
        activePromos.map((promo)=>{
            if (promo.free_items){
                newFreeItems.push(...promo.free_items)
            }
        })
        setFreeItems(newFreeItems)
      },[activePromos])


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

    const get_total = () => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += getCost(item)
            if (item.insurance_purchased){
              totalPrice += getInsurance(item)
            }
          }
        }

        if (freeItems){
            for (let freeItem of freeItems){
                if (freeItem.insurance_purchased){
                    totalPrice += getInsurance(freeItem)
                }
            }
        }
      
        return totalPrice
      }

    const get_subTotal = () => {
        let totalPrice = 0
        if (items){
          for (let item of items){
            totalPrice += getCost(item)
          }
        }

        return totalPrice
    }

    const get_insurance_total = () => {
        let totalPrice = 0

        if (items){
          for (let item of items){
            if (item.insurance_purchased){
              totalPrice += getInsurance(item)
            }
          }
        }

        if (freeItems){
            for ( let freeItem of freeItems){
                if (freeItem.insurance_purchased){
                    totalPrice += getInsurance(freeItem)
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
                </div>
                <div className="flex flex-col sm:flex-row mt-3">
                    <div className="sm:w-3/5">
                        <div className='mb-2 pl-6 sm:pl-0'>
                            <h1 className="text-[40px] font-bold leading-none pt-1">
                                Cart
                            </h1>
                            <p className="leading-none ml-1">
                                {countItems(items)} Items
                            </p>
                        </div>
                        <div className='grow-0'>
                            <CartMain
                                items={items}
                                freeItems={freeItems}

                                updateCartItem={updateCartItem}
                                updateFreeItem={updateFreeItem}
                                deleteCartItem={deleteCartItem}
                                handleFetchCart={handleFetchCart}

                                itemCount={countItems(items)}
                                totalCost={get_total()}
                                getCost={getCost}
                                getInsurance={getInsurance}

                            />
                        </div>
                    </div>
                    <div className='sm:w-2/5 sm:ml-3'>
                        <div className="flex justify-start items-end mt-6">
                            <div className="pl-3 sm:pl-6">
                                <h1 className="text-[30px] font-bold">
                                    Order Summary
                                </h1>
                            </div>
                        </div>
                        <OrderSummary
                            subTotal={get_subTotal()}
                            insuranceTotal={get_insurance_total()}
                            itemCount={countItems(items)}
                            
                            activePromos={activePromos}
                            setActivePromos={setActivePromos}
                            setFreeItems={setFreeItems}
                            
                            deleteFreeItem={deleteFreeItem}
                        />
                    </div>
                </div>
            </div>
            <div>
                <Favorites
                    getCost={getCost}
                    selectedDateRange={selectedDateRange}
                    handleFetchCart={handleFetchCart}
                />
            </div>
            <div>
                <BrowsingHistory
                    addExtraFunction={handleFetchCart}
                />
            </div>
        </div>
    </div>

  )
}

export default CartPage