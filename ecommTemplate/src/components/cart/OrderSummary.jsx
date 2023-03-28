import { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { payment } from '../../assets/svg'
import { Where, When } from '../tripInfo';
import { LargeBlueButton } from '../utils';



const OrderSummary = ({subTotal, itemCount, insuranceTotal}) => {
    const [openPromos, setOpenPromos] = useState(false)
    const [promoCode, setPromoCode] = useState()
    const [activePromos, setActivePromos] = useState([])

    useEffect(() => {
        
    }, [activePromos])

    const handlePromoAdded = (code) => {
        let newActives = activePromos
        newActives.push(code)
        setActivePromos([...newActives])
    }


  return (
    <div className='bg-white rounded-md w-full flex flex-col px-6 py-6'>
        <div className='relative'>
            <h3 className='font-bold'>Where and When</h3>
            <div className='flex flex-row space-x-1'>
                <div className='w-1/2 flex h-[40px]'><Where/></div>
                <div className='w-1/2 flex h-[40px] relative'><When/></div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-col items-start'>
                <div className='w-full flex justify-between'> 
                    <h3 className='font-bold'> Promos</h3> 
                    <div 
                        className='cursor-pointer group'
                        onClick={()=> setOpenPromos(!openPromos)}
                    >
                        <span className='text-[12px] group-hover:underline'> Add Code </span>
                        {openPromos ? 
                            <RemoveIcon className='scale-75 group-hover:scale-100'/>
                            :
                            <AddIcon className='scale-75 group-hover:scale-100'/>
                        }

                    </div>
                </div>
                <div>
                    {activePromos.map((promo, i) => (
                        <div key={i}>
                            {promo}
                        </div>
                    ))}
                </div>
                <div className={`${openPromos ? '' : 'hidden'} flex flex-row w-1/2`}>
                    <input 
                        className='border border-primary p-2 rounded-md outline-primary flex'
                        placeholder='PROMO CODE'
                        onChange={(e)=>setPromoCode(e.target.value)}
                    />
                    <div className='p-2 bg-primary rounded-md ml-1 cursor-pointer group'>
                        <AddIcon
                            onClick={()=> handlePromoAdded(promoCode)}
                            className='group-hover:scale-125 text-white'
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Subtotal ({itemCount} items)</h3>
                <div>
                    <p> ${subTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Insurance</h3>
                <div>
                    <p> ${insuranceTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Estimated Tax</h3>
                <div>
                    <p> $17.03</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className='font-bold'>Total Cost</h3>
                <div className='font-bold'>
                    <p> $154.93</p>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
            <LargeBlueButton
                content='Checkout'
            />
        </div>
        <div className='flex justify-center'>
            <div className='flex flex-row justify-center items-center space-x-1 my-2 w-2/3'>
                <img src={payment}/>
            </div>
        </div>
        <div className='w-full flex justify-center items-center hover:underline cursor-pointer mt-2'>
            Continue Shopping
        </div>   
    </div>
  )
}

export default OrderSummary