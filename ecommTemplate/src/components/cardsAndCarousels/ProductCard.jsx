import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import navigateProduct from '../../hooks/navigateProduct';
import { BlueButton, Stars } from '../utils';
import { fetchItemsToCart, fetchItemFavorited } from '../../api/fetchCart';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';

const ProductCard = ({item}) => {
  const [itemFavorited, setFavorited] = useState(false)
  const {setCartSize, handleNotification} = useContext(ShoppingContext)
  const slug = item.slug

  const handleAddItemClicked = async () =>{
    try{
      const response = await fetchItemsToCart([slug])
      const data = await response.json()
      setCartSize(data['cart_size'])
      handleNotification(`${item.name} has been added to your cart.`)
    } catch (error){
      throw (error)
    }
  }
  
  let navigate = navigateProduct({slug});

  const handleFavoriteClicked = async () => {
      const response = await fetchItemFavorited(item.slug)
      const resp = await response.json()
      setFavorited(resp.favorited)
  }

  useEffect(()=> {
    setFavorited(item.favorited)
  }, [item.favorited])

  return (
    <div className='w-[150px] h-[260px] sm:h-[486px] sm:w-[300px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-2 sm:px-2 flex flex-col m-2 relative group'>
      {item.main_image && (
        <>
          <img 
            src={item.main_image.image} 
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
           {item.name}
          </h3>
          <h4 className='text-[12px] sm:text-[18px] tracking-wide'>
            {item.brand.name}
          </h4>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <Stars rating={item.average_rating}/>
            <div className='ml-1 sm:text-[16px]'>
             ({item.n_ratings})
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start sm:my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold sm:text-[26px] leading-none'>
                ${item.total_cost.toFixed(2)}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For {item.days} Days
              </p>
            </div>
            <div className='h-full border hidden sm:block'>
              <BlueButton
                content='Add to Cart'
                onClick={handleAddItemClicked}
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