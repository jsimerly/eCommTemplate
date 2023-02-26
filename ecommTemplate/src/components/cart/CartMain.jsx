import { yeti45 } from '../../assets/images/products'

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useState } from 'react';


const cartItems = [
  {name: 'Tundra - Hard 45 Cooler', img:yeti45, quant:1, stock:6},
  {name: 'Chair 2', img:yeti45, quant:1, stock:10},
  {name: 'Chair 2', img:yeti45, quant:4, stock:10},
]

const Card = ({item}) => {
  const [quant, setQuant] = useState(item.quant)
  const [insured, setInsured] = useState(false)

  const handleInsuredClicked = () => {
    setInsured(!insured)
  }

  return (
    <div className="flex border border-tertiary rounded-md mb-1">
      <img src={item.img} className='h-[160px] w-[160px] rounded-md'/>
      <div className='p-3 w-full flex flex-col justify-center'>
        <div className='flex flex-col justify-start'>
          <h2 className='text-[30px] leading-none'>
            {item.name}
          </h2>
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

        <div className='w-[60px] border flex justify-center items-center bg-white rounded-md border-primary relative'>
                <div className='flex flex-row justify-center items-center w-full'>
                  <input 
                    className='w-full text-center p-1 text-[16px] outline-none rounded-md' 
                    value={quant} 
                    onChange={(e)=> setQuant(e.target.value)}
                    />
                  <div className='flex flex-col'>
                    <div className='h-[16px] w-[20px] mr-1'>
                      <AddIcon 
                          className='scale-75 cursor-pointer hover:scale-90'
                          onClick={()=> setQuant(quant+1)}
                      />
                    </div>
                    <div className='h-[16px] w-[20px] mr-1 text-center mb-1'>
                      <RemoveIcon 
                          className='scale-75 cursor-pointer hover:scale-90'
                          onClick={()=> setQuant(quant-1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
      </div>
      <div className='flex flex-col justify-between p-2'>
        <div className='flex justify-end'>
          <CloseIcon className='cursor-pointer'/>
        </div>
          <div className='flex flex-col leading-none'>
            <span className='font-bold text-[24px]'> $33.33</span>
            <span className='text-[12px] text-center'> For 7 Days </span>
          </div>
      </div>
    </div>
  )
}

const CartMain = () => {
  return (
    <div className='w-full bg-white rounded-md p-6'>
        {cartItems.map((item, i) => (
          <Card
            item={item}
            key={i}
          />
        ))}
    </div>
  )
}

export default CartMain