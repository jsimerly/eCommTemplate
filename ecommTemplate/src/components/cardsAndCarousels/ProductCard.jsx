import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import navigateProduct from '../../hooks/navigateProduct';
import { BlueButton, Stars } from '../utils';
import { useEffect, useState, memo } from 'react';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';
import { useLocation } from 'react-router-dom';
import ErrorBoundry from '../utils/ErrorBoundry';
import { addToFavorites } from './addTo';
import navigateCart from '../../hooks/navigateCart';
import { fetchItemsToCart } from '../../api/fetchCart';

const ProductCard = ({item, addExtraFunction}) => {
  const [itemFavorited, setFavorited] = useState(false)
  const {setCartSize, handleNotification} = useContext(ShoppingContext)
  const location = useLocation();
  const inCart = location.pathname === '/cart';
  const slug = item.slug

  let navigate = navigateProduct({slug});

  const GoToCart = () => (
    <div 
      className='cursor-pointer hover:underline px-2 py-1 bg-primary text-white rounded-md'
      onClick={navigateCart()}
    > 
      View Cart & Check Out
    </div>
  )

  const handleAddItemClicked = async () =>{
    
    const response = await fetchItemsToCart([item])
    if (response.ok){
      const resp = await response.json()
      setCartSize(resp['cart_size'])

      if (addExtraFunction){
        addExtraFunction()
      }

      if (!inCart){ //using === to prevent and undefined/null from getting through
        handleNotification(`${item.name} has been added to your cart.`, <GoToCart/>)
      }
    } else {
      handleNotification(`We're currently experiencing issues and were unable to add ${item.name} to your cart.`)
    }
  }
  
  const handleFavoriteClicked = async () => {
      addToFavorites(item, setFavorited)
  }

  useEffect(()=> {
    setFavorited(item.favorited)
  }, [item.favorited])

  return (
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">

    <div className='w-[150px] h-[260px] md:h-[486px] md:min-w-[300px] rounded-md bg-tertiaryTone-100 p-2 md:pt-2 md:px-2 flex flex-col m-2 relative group'>
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
            className='font-bold text-[16px] md:text-[20px] truncate hover:cursor-pointer hover:underline'
            onClick={navigate}
            >
           {item.name}
          </h3>
          <h4 className='text-[12px] md:text-[18px] tracking-wide'>
            {item.brand.name}
          </h4>
        </div>
        <div className='hidden md:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <Stars rating={item.average_rating}/>
            <div className='ml-1 md:text-[16px]'>
             ({item.n_ratings})
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start md:my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold md:text-[26px] leading-none'>
                ${item.total_cost.toFixed(2)}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For {item.days} Days
              </p>
            </div>
            <div className='h-full border hidden md:block'>
              <BlueButton
                content='Add to Cart'
                onClick={handleAddItemClicked}
                />
            </div>
            <div className='md:hidden'>
              <BlueButton
                className='!p-1'
                content={<AddIcon/>}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundry>
  )
}

export default memo(ProductCard);