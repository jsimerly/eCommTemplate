import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useEffect, useState } from 'react';
import { QuantInput } from '../utils';
import { create_full_image_path } from '../../assets/util';


const Card = ({item}) => {
  const [quant, setQuant] = useState(1)
  const [insured, setInsured] = useState(false)

  useEffect(() => {
    setQuant(item.quantity)
    setInsured(item.insurance_purchased)
  }, [item])

  const handleInsuredClicked = () => {
    setInsured(!insured)
  }
  console.log(item)
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
              {insured ? 
              <CheckBoxIcon
                className='text-primary group-hover:scale-110'
              /> 
              : 
              <CheckBoxOutlineBlankIcon
                className='text-primary group-hover:scale-110'
              />}
            
            <div className='ml-1 group-hover:underline'>
               Insure for <span className='font-bold'> $6.99</span>
            </div>
            </div>
          </div>
        </div>
        {item.stock < 10 ? 
          <div className='text-[#C76C63]'>
            Only {item.stock} left in stock - order soon.
          </div>
          :
          <div className='text-primary'>
            In Stock
          </div>
        }
        <div className='w-[60px] h-[40px]'>
          <QuantInput
            quant={quant}
            setQuant={setQuant}
            className='!text-[16px] !p-1'
            buttonSize='16px'
          />
        </div>

      </div>
      <div className='flex flex-col justify-between p-2'>
        <div className='flex justify-end'>
          <CloseIcon className='cursor-pointer'/>
        </div>
          <div className='flex flex-col leading-none'>
            <span className='font-bold text-[24px]'> ${item.item.item_cost.toFixed(2)}</span>
          </div>
      </div>
    </div>
  )
}

const CartMain = ({cart}) => {
  
  return (
    <div className='w-full bg-white rounded-md p-6'>
        <h3 className='pb-3'>
          Great choices! However, please note that adding an item to your cart doesn't guarantee availability. We recommend checking out now before it's sold out.
        </h3>
          {cart.items && cart.items.map((item, i) => (
            <Card
              item={item}
              key={i}
            />
          ))}
        <div className='w-full flex justify-center items-center'>
          <div className='pt-2 px-3 text-[24px] '> Subtotal (3 items): <span className='font-bold'> $99.99</span> </div>
        </div>
    </div>
  )
}

export default CartMain