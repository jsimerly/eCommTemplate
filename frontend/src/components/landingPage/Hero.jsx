import { heroMain } from '../../../constants/pages/landingCopy_constant'
import navigateShopping from '../../hooks/navigateShopping'
import { hero_banner, hero_banner_mobile } from '../../assets/images/banners'
import { LargeBlueButton} from '../utils'
import { useState } from 'react'

const Hero = () => {  
  let handleClick = navigateShopping()
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = () =>{
    setLoaded(true)
  }

  return (
    <div className='bg-[#a4d4f5] w-full text-white flex flex-col sm:flex-row items-center justify-center sm:justify-start relative sm:h-[700px] h-[390px]'>
      <img 
        src={hero_banner} 
        className={`bg-neutralOffWhite ${loaded? null : 'hidden'} object-scale h-full w-full`} 
        onLoad={handleImageLoad}
      />
      <div className={`bg-neutralOffWhite ${loaded? 'hidden' : null}`}></div>
      <div className='absolute flex justify-end items-center sm:h-[75%] sm:w-1/2 h-[90%] mx-6 sm:mx-0 bg-white sm:rounded-r-lg sm:rounded-l-none rounded-md sm:min-w-[650px]'>
        <div className='flex flex-col justify-center items-center sm:items-start text-primary sm:w-[550px] p-6 md:mr-[100px] gap-8'>
          <h1 className='text-[30px] sm:text-[50px] font-bold px-0 leading-8 sm:leading-none text-center sm:text-start'>
            {heroMain.title}
          </h1>
          <p className='sm:text-[20px] leading-6 sm:leading-8 text-neutralDark text-center sm:text-start max-w-[450px]'>
            {heroMain.desc}
          </p>
          <div className='sm:w-1/3'>
            <LargeBlueButton
              onClick={handleClick}
              content={heroMain.cta}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero