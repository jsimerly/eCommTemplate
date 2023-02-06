import React from 'react'
import {yeti45} from '../assets/images/'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CaroProdCard = (props) => {
  return (
    <div className='min-h-[460px] w-[300px] rounded-md bg-tertiaryTone-100 pt-4 px-4 flex flex-col mr-4'>
      <img src={yeti45} className='bg-white object-scale-down rounded-md hover:cursor-pointer'/>
      <div className='mt-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col min-h-[60px]'>
          <h3 className='font-bold text-[20px] truncate hover:cursor-pointer'>
            {props.header}
          </h3>
          <h4 className='text-[18px] tracking-wide'>
            Yeti
          </h4>
        </div>
        <div>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <div className='ml-1'>
             (6443)
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start my-4'>

          <div className='flex justify-between w-full items-center mt-3'>
            <div className='font-semibold text-[26px]'>
                    $16.98
              </div>
              <button className='text-white p-3 bg-primary rounded flex justify-center items-center'>
                Add to Cart
              </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CaroProdCard