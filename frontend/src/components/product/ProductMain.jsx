import { useEffect, useState, useContext } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { LargeBlueButton, QuantInput, Stars } from '../utils';
import { fetchItemFavorited, fetchItemsToCart } from '../../api/fetchCart';
import { ShoppingContext } from '../../context';
import navigateCart from '../../hooks/navigateCart';

const ProductMain = ({mainCardInfo}) => {
    const [quant, setQuant] = useState(1)
    const [insured, setInsured] = useState(false)
    const [mainImg, setMainImg] = useState()
    const [itemFavorited, setFavorited] = useState(false)
    const {setCartSize, handleNotification} = useContext(ShoppingContext)

    useEffect(()=>{
      if(mainCardInfo){
        setMainImg(mainCardInfo.mainImg)
        setFavorited(mainCardInfo.favorited)
      }
    }, [mainCardInfo])

    const handleInsuredClicked = () => {
      setInsured(!insured)
    }

    const handleFavoriteClicked = async () => {
      const response = await fetchItemFavorited(mainCardInfo.slug)
      const resp = await response.json()
      setFavorited(resp.favorited)
    }

    const GoToCart = () => (
      <div 
        className='cursor-pointer hover:underline px-2 py-1 bg-primary text-white rounded-md'
        onClick={navigateCart()}
      >
        View Cart & Check Out
      </div>
    )

    const handleAddToCart = async () => {
      const cartItem = {
        slug: mainCardInfo.slug,
        quantity: quant,
        insurancePurchased: insured,
      }
      const response = await fetchItemsToCart([cartItem])
      if (response.ok){
        const resp = await response.json()
        setCartSize(resp['cart_size'])
        handleNotification(`${mainCardInfo.name} has been added to your cart.`, <GoToCart/>)
      } else {
        handleNotification(`We're currently experiencing issues and were unable to add ${mainCardInfo.name} to your cart.`)
      }
    }

  return (

        <div className="flex">
          <div className="flex flex-row w-2/3">
            <div className='flex max-h-[642px]'>
              <div className="w-1/5 overflow-hidden hover:overflow-y-auto scrollbar-hide">
              {mainCardInfo && mainCardInfo.imgList.map((image, index) => 
              { 
                const image_path = image.image
                return (
                  <img
                      key={index}
                      src={image_path}
                      onClick={() => setMainImg(image_path)}
                      className='bg-white rounded-md mb-4 cursor-pointer aspect-square shadow-sm'
                  />)
              })}
              </div>
              <div className="w-4/5 rounded-md mx-6">
                {mainImg &&
                  <img
                    src={mainImg}
                    className='bg-white rounded-md aspect-square shadow-sm'
                  />
                }

              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center text-neutralDark p-6">
            <div className='flex flex-row justify-between w-full'>
              {mainCardInfo && 
                <div className='flex flex-col'>
                  <h1 className='text-[40px] font-bold leading-none'>
                    {mainCardInfo.name}
                  </h1>
                  <h2 className='text-[28px] '>
                    {mainCardInfo.brand}
                  </h2>
                </div>
              }

              <div 
                className='cursor-pointer hover:scale-110'
                onClick={handleFavoriteClicked}
              >
                {itemFavorited ? 
                  <FavoriteIcon className={`text-primary`} sx={{fontSize: 30}}/>
                  :
                  <FavoriteBorderIcon className={`text-primary`} sx={{fontSize: 30}}/>
                }
              </div>

            </div>
            <div className='flex justify-between items-center w-full mt-6'>
            {mainCardInfo &&
              <div className='text-center'>
                
                  <h3 className='text-[36px] leading-none font-bold'>
                    ${mainCardInfo.price.toFixed(2)}
                  </h3>


                <p className='leading-none'>
                  For {mainCardInfo.days} days
                </p>
              </div>
              }
              {mainCardInfo && 
                <div>
                  <Stars rating={mainCardInfo.rating} size='30px'/>
                  <span className='ml-2'>
                    ({mainCardInfo.nRatings})
                  </span>
                </div>
              }

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
                {mainCardInfo && 
                  <div className='text-[20px] ml-2 group-hover:underline'>
                    Insure for <span className='font-bold'> ${mainCardInfo.insurance.toFixed(2)}</span>
                  </div>
                }
              </div>
            </div>
            {mainCardInfo && 
              <div className='w-full flex flex-col justify-start mt-6'>
                <div>
                  <h3 className='font-semibold text-[14px]'>
                    Producer Description
                  </h3>
                  <p>
                    {mainCardInfo.desc}
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
            }
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
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>

  )
}

export default ProductMain