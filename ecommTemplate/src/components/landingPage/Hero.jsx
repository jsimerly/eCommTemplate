import HeroCarousel from './HeroCarousel'
import { heroMain } from '../../constants'
import navigateShopping from '../../hooks/navigateShopping'

const HeroV2 = () => {
  return (
    <div className='bg-primary w-full text-white flex flex-col md:flex-row'>
      <div className='flex flex-1 justify-center items-center'>
        <div className='text-center my-10 mx-6 sm:m-20'>
          {heroMain.title}
          <p className='text-[24px] max-w-[600px] leading-6 sm:leading-10 sm:px-6 pb-6'>
            {heroMain.desc}
          </p>
          <button 
            className='bg-white text-primary p-3 rounded-md  font-bold w-[180px] text-[18px] hover:underline'
            onClick={()=> navigateShopping('wher', 'when1', 'when2')}  
          >
            {heroMain.cta}A
          </button>
        </div>
      </div>
      <HeroCarousel/>
    </div>
  )
}

export default HeroV2