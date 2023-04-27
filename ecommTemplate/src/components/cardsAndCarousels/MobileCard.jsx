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

const MobileCard = ({item, addExtraFunction}) => {
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

  const handleAddItemClicked = async (e) =>{
    e.stopPropagation();
    const response = await fetchItemsToCart([item])
    if (response.ok){
      const resp = await response.json()
      setCartSize(resp['cart_size'])

      if (addExtraFunction){
        addExtraFunction()
      }

      if (!inCart){ 
        handleNotification(`${item.name} has been added to your cart.`, <GoToCart/>, false)
      }
    } else {
      handleNotification(`We're currently experiencing issues and were unable to add ${item.name} to your cart.`)
    }
  }
  
  const handleFavoriteClicked = async (e) => {
    e.stopPropagation();
    addToFavorites(item, setFavorited)
  }

  useEffect(()=> {
    setFavorited(item.favorited)
  }, [item.favorited])

  return (
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">

    <div 
        className='w-full h-[220px] md:h-[486px] md:min-w-[300px] rounded-md bg-white p-2 md:pt-2 md:px-2 flex flex-row mb-4 relative group shadow-md justify-center items-center'
        onClick={navigate}
    >
      {item.main_image && (
          <img 
            src={item.main_image.image} 
            className='bg-white object-scale-down rounded-md hover:cursor-pointer aspect-square w-2/5'
            
            />
      )}
      <div className='mt-2 p-6 text-tertiary flex flex-col grow'>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col min-h-[60px] w-[80%]'>
            <h3 
                className='font-bold text-[16px]'
            >
            {item.name}
            </h3>
            <h4 className='text-[12px] tracking-wide'>
                {item.brand.name}
            </h4>
            </div>
            <div onClick={handleFavoriteClicked} className='flex justify-end items-start'>
                {itemFavorited ? 
                <FavoriteIcon className={`text-primary`} sx={{fontSize: 30}}/>
                :
                <FavoriteBorderIcon className={`text-primary`} sx={{fontSize: 30}}/>
                }
          </div>
        </div>

        <div className='flex flex-row mt-2 hover:cursor-pointer'>
        <Stars rating={item.average_rating}/>
        <div className='ml-1 text-[16px]'>
            ({item.n_ratings})
        </div>
        </div>

        <div className='flex flex-col flex-1 w-full justify-between items-start my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold text-[26px] leading-none'>
                ${item.total_cost.toFixed(2)}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For {item.days} Days
              </p>
            </div>
            <div className='md:hidden'>
              <BlueButton
                className='!p-1'
                content={<AddIcon/>}
                onClick={handleAddItemClicked}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundry>
  )
}

export default memo(MobileCard);