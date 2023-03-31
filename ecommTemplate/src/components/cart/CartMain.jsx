import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { fetchItemDeleteCart } from '../../api/fetchCart';
import { QuantInput } from '../utils';
import { create_full_image_path } from '../../assets/util';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';


const Card = ({item, updateCartItem, deleteCartItem, getInsurance, getCost}) => {
  const {setCartSize} = useContext(ShoppingContext)

  const handleQuantChanged = (quantValue) => {
    updateCartItem(item.uuid, {quantity: quantValue})
  }

  const handleInsuredClicked = () => {
    updateCartItem(item.uuid, {insurance_purchased: !item.insurance_purchased})
  }

  const handleDeleteClicked = async () =>{
    try{
      const response = await fetchItemDeleteCart(item.uuid)
      const data = await response.json()
      setCartSize(data['cart_size'])
      deleteCartItem(item.uuid)
    } catch (error){
      throw error
    }
  }

  return (
    <div className="flex border border-tertiary rounded-md mb-1">
      <img src={create_full_image_path(item.item.main_image.image)} className='h-[160px] w-[160px] rounded-md cursor-pointer'/>
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



const CartMain = ({items, updateCartItem, itemCount, totalCost, deleteCartItem, getInsurance, getCost}) => {
  return (
    <div className='w-full bg-white rounded-md p-6'>
        <h3 className='pb-3'>
          Great choices! However, please note that adding an item to your cart doesn't guarantee availability. We recommend checking out now before it's sold out.
        </h3>
          {items && items.map((item, i) => (
            <Card
              item={item}
              updateCartItem={updateCartItem}
              deleteCartItem={deleteCartItem}
              getCost={getCost}
              getInsurance={getInsurance}
              key={i}
            />
          ))}
        <div className='w-full flex justify-center items-center'>
          <div className='pt-2 px-3 text-[24px] '> Total ({itemCount} items): <span className='font-bold'> ${totalCost.toFixed(2)}</span> </div>
        </div>
    </div>
  )
}

export default CartMain