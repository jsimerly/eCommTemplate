import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../context';
import { QuantInput } from '../utils';
import { fetchItemDeleteCart, fetchUpdateQuantity, fetchUpdateInsurance } from '../../api/fetchCart';
import navigateProduct from '../../hooks/navigateProduct';


const CartItemCard = ({item, updateCartItem, deleteCartItem, getInsurance, getCost, handleFetchCart}) => {
    const {setCartSize} = useContext(ShoppingContext)
    const [isMounted, setIsMounted] = useState(false)

    const slug = item.item.slug
    let navigate = navigateProduct({slug})

    useEffect(()=>{
      if (!isMounted){
        setIsMounted(true)
        return
      }
      
      //this is so if they're clicking up a bunch of time in a row it does not send too many requests
      const delayDebounce = setTimeout(
        async () => {
          const response = await fetchUpdateQuantity(item.uuid, item.quantity);
          if (response.ok){
            handleFetchCart()
          }
        }, 300)
      return () => clearTimeout(delayDebounce)
    },[item.quantity])

    const handleQuantChanged = (quantValue) => {
      updateCartItem(item, {quantity: quantValue})
    }

    const handleInsuredClicked = () => {
      const updateInsurance = async () => {
        const response = await fetchUpdateInsurance(item.uuid, !item.insurance_purchased)
        if (response.ok){

        } else {
          //send and error and set it back
        }
      }
      updateInsurance()
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
      <div className="flex border border-tertiary rounded-md mb-1 relative">
        <div className='flex justify-center items-center'>
          <img 
            onClick={navigate}
            src={item.item.main_image.image} 
            className='h-[100px] w-[100px] sm:h-[160px] sm:w-[160px] rounded-md aspect-square cursor-pointer'
          />
        </div>
        <div className='p-3 w-full flex flex-col justify-between flex-1'>
          <div className='flex flex-col justify-start'>
            <div className='flex grow-0'>
              <h2 
                className='text-[20px] sm:text-[30px] leading-none cursor-pointer hover:underline'
                onClick={navigate}
                >
                  {item.item.name}
              </h2>
            </div>
            <div className='flex flex-row items-center'>
              <div className='my-2 flex flex-row cursor-pointer group'
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
          <div className='w-[60px] h-[40px] hidden sm:block'>
            <QuantInput
              quant={item.quantity}
              setQuant={handleQuantChanged}
              className='!text-[16px] !p-1'
              buttonSize='16px'
            />
          </div>
          <div className='sm:hidden'>
            <button 
              className='grow-0 p-1 border border-primary rounded-md' inputMode='numeric'
            >
              Qty: {item.quantity}
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-between p-2'>
          <div className='flex justify-end'>
            <CloseIcon 
              className='cursor-pointer'
              onClick={handleDeleteClicked}
            />
          </div>
          <div className='absolute flex flex-col leading-none bottom-0 right-0 p-2'>
            <span className='font-bold text-[20px] sm:text-[24px]'> ${getCost(item).toFixed(2)}</span>
          </div>
      </div>
    </div>
    )
  }

export default CartItemCard