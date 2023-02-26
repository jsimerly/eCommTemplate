import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const ProductMain = ({imgList, bullets}) => {
    const [mainImg, setMainImg] = useState(imgList[0])
    const [quant, setQuant] = useState(1)
    const [insured, setInsured] = useState(false)

    const handleInsuredClicked = () => {
      setInsured(!insured)
    }

  return (

        <div className="flex">
          <div className="flex flex-row w-2/3">
            <div className='flex max-h-[642px]'>
              <div className="w-1/5 overflow-hidden hover:overflow-y-auto scrollbar-hide">
                {imgList.map((pic, i) => (
                    <img
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
                  Tundra - 45 Hard Cooler
                </h1>
                <h2 className='text-[28px] '>
                  Yeti
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
                  $23.99
                </h3>
                <p className='leading-none'>
                  For 7 days
                </p>
              </div>
              <div>
                <StarIcon className='scale-125'/>
                <StarIcon className='scale-125'/>
                <StarIcon className='scale-125'/>
                <StarIcon className='scale-125'/>
                <StarHalfIcon className='scale-125'/>
                <span className='ml-2'>
                  (463)
                </span>
              </div>
            </div>
            <div className='w-full mt-6'>
              <div className='flex grow-0 cursor-pointer group'
                onClick={handleInsuredClicked}
              >
                {insured ? 
                <CheckBoxIcon
                  className='text-primary scale-150 group-hover:scale-110'
                /> 
                : 
                <CheckBoxOutlineBlankIcon
                  className='text-primary scale-150 group-hover:scale-110'
                />}

                <div className='text-[20px] ml-2 group-hover:underline'>
                  Insure for <span className='font-bold'> $6.99</span>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-start mt-6'>
              <div>
                <h3 className='font-semibold text-[14px]'>
                  Producer Description
                </h3>
                <p>
                Tall enough to chill most bottles of wine and keep the essentials fresh while you take the scenic route.
                </p>
                <ul className='list-disc pl-10 pt-6'>
                {bullets.map((bullet, i) => (
                  <li key={i}>
                    {bullet}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex flex-row w-full mt-6 p-2'>
              <div className='w-[130px] border flex justify-center items-center bg-white rounded-md border-primary relative'>
                <div className='flex flex-row justify-center items-center w-full'>
                  <input 
                    className='w-full text-end p-2 text-[24px] outline-none' 
                    value={quant} 
                    onChange={(e)=> setQuant(e.target.value)}
                    />
                  <div className='flex flex-col p-2'>
                    <AddIcon 
                        className='scale-75 cursor-pointer hover:scale-90'
                        onClick={()=> setQuant(quant+1)}
                    />
                    <RemoveIcon 
                        className='scale-75 cursor-pointer hover:scale-90'
                        onClick={()=> setQuant(quant-1)}
                    />
                  </div>
                </div>
              </div>
              <button className='text-[20px] w-full bg-primary text-white font-bold rounded-md p-4 mx-2 hover:underline cursor-pointer'>
                Add to Cart
              </button>
              {/*when adding to cart alert them to the location and date range*/}
            </div>
          </div>
        </div>

  )
}

export default ProductMain