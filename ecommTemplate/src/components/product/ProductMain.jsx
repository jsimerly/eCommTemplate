import { useEffect, useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { LargeBlueButton, QuantInput, Stars } from '../utils';


const ProductMain = ({mainCardInfo}) => {
    const [quant, setQuant] = useState(1)
    const [insured, setInsured] = useState(false)
    const [mainImg, setMainImg] = useState(mainCardInfo.mainImg)

    useEffect(()=>{
      setMainImg(mainCardInfo.mainImg)
    }, [mainCardInfo])

    const handleInsuredClicked = () => {
      setInsured(!insured)
    }

    const bullets = []
    const imgList = []
  return (

        <div className="flex">
          <div className="flex flex-row w-2/3">
            <div className='flex max-h-[642px]'>
              <div className="w-1/5 overflow-hidden hover:overflow-y-auto scrollbar-hide">
                {mainCardInfo.imgList.map((pic, i) => (
                    <img
                      onClick={()=>setMainImg(pic)}
                      key={i}
                      src={pic}
                      className='bg-white rounded-md mb-4 cursor-pointer'
                    />
                ))}
            
              </div>
              <div className="w-4/5 rounded-md mx-6">
                <img
                  src={mainImg}
                  className='bg-white rounded-md aspect-square'
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center text-tertiary p-6">
            <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-col'>
                <h1 className='text-[40px] font-bold leading-none'>
                  {mainCardInfo.name}
                </h1>
                <h2 className='text-[28px] '>
                  {mainCardInfo.brand}
                </h2>
              </div>
              <div className='flex justify-center p-4 text-primary'>
                  <FavoriteBorderIcon
                    className='scale-125 hover:cursor-pointer hover:scale-150'
                  />
              </div>
            </div>
            <div className='flex justify-between items-center w-full mt-6'>
              <div className='text-center'>
                <h3 className='text-[36px] leading-none font-bold'>
                  ${mainCardInfo.price}
                </h3>
                <p className='leading-none'>
                  For 7 days
                </p>
              </div>
              <div>
                <Stars rating={mainCardInfo.rating} size='30px'/>
                <span className='ml-2'>
                  ({mainCardInfo.nRatings})
                </span>
              </div>
            </div>
            <div className='w-full mt-6'>
              <div className='flex grow-0 cursor-pointer group items-center'
                onClick={handleInsuredClicked}
              >
                {insured ? 
                <CheckBoxIcon
                  sx={{fontSize: '35px'}}
                  className='text-primary group-hover:scale-110'
                /> 
                : 
                <CheckBoxOutlineBlankIcon
                  sx={{fontSize: '35px'}}
                  className='text-primary group-hover:scale-110'
                />}

                <div className='text-[20px] ml-2 group-hover:underline'>
                  Insure for <span className='font-bold'> ${mainCardInfo.insurance}</span>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start mt-6'>
              <div>
                <h3 className='font-semibold text-[14px]'>
                  Producer Description
                </h3>
                <p>
                  {mainCardInfo.prodDesc}
                </p>
                <ul className='list-disc pl-10 pt-6'>
                {mainCardInfo.bullets.map((bullet, i) => (
                  <li key={i}>
                    {bullet}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex flex-row w-full mt-6 p-2'>
              <div className='w-2/5'>
                <QuantInput
                  quant={quant}
                  setQuant={setQuant}
                />
              </div>
              <div className='w-full mx-4'>
                <LargeBlueButton
                  content='Add to Cart'
                />
              </div>
              {/*when adding to cart alert them to the location and date range*/}
            </div>
          </div>
        </div>

  )
}

export default ProductMain