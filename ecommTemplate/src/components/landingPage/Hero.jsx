import HeroCarousel from './HeroCarousel'
import { heroMain } from '../../constants/landingCopy'
import navigateShopping from '../../hooks/navigateShopping'
import { hero_banner } from '../../assets/images/banners'

const Hero = () => {  
  let handleClick = navigateShopping()

  return (
    <div className='bg-primary w-full text-white flex flex-col md:flex-row items-center relative'>
      <img src={hero_banner} className=''/>
      <div className='flex flex-1 justify-center h-4/5 items-center absolute bg-white w-1/2 rounded-r-lg'>
        <div className='text-center text-primary'>
          <h1 className='text-[36px] sm:text-[70px] font-extrabold py-6 px-0     sm:px-6 leading-none'>
            {heroMain.title}
          </h1>
          <p className='text-[30px] max-w-[600px] leading-6 sm:leading-10 sm:px-6 pb-6'>
            {heroMain.desc}
          </p>
          <button 
            className='bg-primary text-white p-3 rounded-md  font-bold w-[180px] text-[18px] hover:underline'
            onClick={handleClick}  
          >
            {heroMain.cta}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero