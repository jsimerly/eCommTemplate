import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import navigateProduct from '../../hooks/navigateProduct';
import { BlueButton, Stars } from '../utils';
import {create_full_image_path } from '../../assets/util';
import { fetchItemsToCart, fetchItemFavorited } from '../../api/fetchCart';
import { useEffect, useState } from 'react';


const ProductCard = ({name, brand, slug, average_rating, n_ratings,  main_image, total_cost, days, favorited}) => {
  const [itemFavorited, setFavorited] = useState(false)

  let navigate = navigateProduct({slug});

  const handleFavoriteClicked = async () => {
      const response = await fetchItemFavorited(slug)
      const resp = await response.json()
      setFavorited(resp.favorited)
  }

  useEffect(()=> {
    setFavorited(favorited)
  }, [favorited])

  console.log(favorited)

  return (
    <div className='w-[150px] h-[260px] sm:h-[486px] sm:w-[300px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-2 sm:px-2 flex flex-col m-2 relative group'>
      {main_image && (
        <>
          <img 
            src={main_image.image} 
            className='bg-white object-scale-down rounded-md hover:cursor-pointer'
            onClick={navigate}
          />
          <div 
            className={`absolute right-0 mr-6 mt-4 hover:scale-110 cursor-pointer ${itemFavorited? 'block' : 'hidden'} group-hover:block`}
            onClick={handleFavoriteClicked}
          >
            {itemFavorited ? 
              <FavoriteIcon className={`text-primary`} sx={{fontSize: 30}}/>
              :
              <FavoriteBorderIcon className={`text-primary`} sx={{fontSize: 30}}/>
            }
            
          </div>

        </>
      )}
      <div className='mt-2 p-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col min-h-[60px]'>
          <h3 
            className='font-bold text-[16px] sm:text-[20px] sm:truncate hover:cursor-pointer hover:underline'
            onClick={navigate}
          >
           {name}
          </h3>
          <h4 className='text-[12px] sm:text-[18px] tracking-wide'>
            {brand.name}
          </h4>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <Stars rating={average_rating}/>
            <div className='ml-1 sm:text-[16px]'>
             ({n_ratings})
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start sm:my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold sm:text-[26px] leading-none'>
                ${total_cost.toFixed(2)}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For {days} Days
              </p>
            </div>
            <div className='h-full border hidden sm:block'>
              <BlueButton
                content='Add to Cart'
                onClick={()=>fetchItemsToCart([slug])}
              />
            </div>
            <div className='sm:hidden'>
              <BlueButton
                className='!p-1'
                content={<AddIcon/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard