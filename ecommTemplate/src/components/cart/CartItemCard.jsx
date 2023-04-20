import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../context';
import { QuantInput } from '../utils';
import { fetchItemDeleteCart, fetchUpdateQuantity } from '../../api/fetchCart';


const CartItemCard = ({item, updateCartItem, deleteCartItem, getInsurance, getCost, handleFetchCart}) => {
    const {setCartSize} = useContext(ShoppingContext)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
      if (!isMounted){
        setIsMounted(true)
        return
      }
      
      const delayDebounce = setTimeout(
        async () => {
          const response = await fetchUpdateQuantity(item.uuid, item.quantity);
          if (response.ok){
            handleFetchCart()
          }
        }, 1500)
      return () => clearTimeout(delayDebounce)
    },[item.quantity])
  
    const handleQuantChanged = (quantValue) => {
      updateCartItem(item, {quantity: quantValue})
    }

    const handleInsuredClicked = () => {
      updateCartItem(item, {insurance_purchased: !item.insurance_purchased})
    }
  
    const handleDeleteClicked = async () =>{
      try{
        const response = await fetchItemDeleteCart(item.uuid)
        if (response.ok){
          const data = await response.json()
          setCartSize(data['cart_size'])
          deleteCartItem(item)
          handleFetchCart()
        }
      } catch (error){
        throw error
      }
    }
  
    return (
      <div className="flex border border-tertiary rounded-md mb-1">
        <img src={item.item.main_image.image} className='h-[160px] w-[160px] rounded-md cursor-pointer'/>
        <div className='p-3 w-full flex flex-col justify-between'>
          <div className='flex flex-col justify-start'>
            <div className='flex grow-0'>
              <h2 className='text-[30px] leading-none cursor-pointer hover:underline'>{item.item.name}</h2>
            </div>
            <div className='flex flex-row items-center'>
              <div className='flex grow-0 cursor-pointer group'
                onClick={handleInsuredClicked}
              >
                {item.insurance_purchased ? 
                <CheckBoxIcon
                  className='text-primary group-hover:scale-110'
                /> 
                : 
                <CheckBoxOutlineBlankIcon
                  className='text-primary group-hover:scale-110'
                />}
              
              <div className='ml-1 group-hover:underline'>
                 Insure for <span className='font-bold'> ${getInsurance(item).toFixed(2)}</span>
              </div>
              </div>
            </div>
          </div>
          {item.stock < 10 ? 
            <div className='text-errorRed'>
              Only {item.stock} left in stock - order soon.
            </div>
            :
            <div className='text-primary'>
              In Stock
            </div>
          }
          <div className='w-[60px] h-[40px]'>
            <QuantInput
              quant={item.quantity}
              setQuant={handleQuantChanged}
              className='!text-[16px] !p-1'
              buttonSize='16px'
            />
          </div>
        </div>
        <div className='flex flex-col justify-between p-2'>
            <div className='flex justify-end'>
              <CloseIcon 
                className='cursor-pointer'
                onClick={handleDeleteClicked}
              />
            </div>
          <div className='flex flex-col leading-none'>
            <span className='font-bold text-[24px]'> ${getCost(item).toFixed(2)}</span>
          </div>
      </div>
    </div>
    )
  }

export default CartItemCard