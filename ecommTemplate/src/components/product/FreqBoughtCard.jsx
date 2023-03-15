import navigateProduct from '../../hooks/navigateProduct';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from 'react';
import { calculate_product_cost, create_full_image_path } from '../../assets/util';
import { useNavigate } from 'react-router-dom';
import { el } from 'date-fns/locale';

const FreqBoughtCard= ({item, handleCheckClicked, checked}) => {

  let navigate = useNavigate()

  return (

    <div className='w-[150px] h-[260px] sm:h-[320px] sm:w-[240px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-4 sm:px-4 flex flex-col m-2'>
      <img 
        src={create_full_image_path(item.main_image.image)} 
        className='bg-white object-scale-down rounded-md hover:cursor-pointer'
        onClick={()=> navigate(`/p/${item.slug}`)}
      />
      <div className='mt-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col'>
            <h3 
                className='font-bold text-[16px] sm:text-[18px] sm:truncate hover:cursor-pointer hover:underline leading-none' 
                onClick={navigate}
            >
                {item.name}
            </h3>
            <h4 className='text-[12px] sm:text-[14px] tracking-wide'>
                {item.brand.name}
            </h4>
        </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-center items-center'>
            <div className='flex justify-between w-full items-center pb-2'>
                <div className='font-semibold sm:text-[18px] leading-none'>
                    ${item.total_cost.toFixed(2)}
                </div>
                <div
                    onClick={handleCheckClicked}
                >
                    {checked ?        
                      <CheckBoxIcon className='text-primary hover:scale-110 cursor-pointer'/> 
                      :
                      <CheckBoxOutlineBlankIcon className='text-primary hover:scale-110 cursor-pointer'/>  
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FreqBoughtCard