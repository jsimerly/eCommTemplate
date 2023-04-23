import { heroMain } from './landingCopy_constant'
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
        className={`bg-tertiaryTone-100 ${loaded? null : 'hidden'} object-scale h-full w-full`} 
        onLoad={handleImageLoad}
      />
      <div className={`bg-tertiaryTone-100 ${loaded? 'hidden' : null}`}></div>
      <div className='absolute flex flex-1 justify-center items-center sm:h-4/5 sm:w-1/2 h-[90%] mx-6 sm:mx-0 bg-white sm:rounded-r-lg sm:rounded-l-none rounded-md shadow-md sm:min-w-[650px]'>
        <div className='flex flex-col justify-center items-center text-primary p-6'>
          <h1 className='text-[36px] sm:text-[70px] font-bold py-6 px-0 sm:px-6 leading-none text-center'>
            {heroMain.title}
          </h1>
          <p className='px-10 sm:text-[30px] leading-6 sm:leading-10 sm:px-6 pb-6 text-tertiary text-center max-w-[450px]'>
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