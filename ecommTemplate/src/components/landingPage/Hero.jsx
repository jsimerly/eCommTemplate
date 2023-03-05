import { heroMain } from './landingCopy_constant'
import navigateShopping from '../../hooks/navigateShopping'
import { hero_banner } from '../../assets/images/banners'
import { LargeBlueButton} from '../utils'

const Hero = () => {  
  let handleClick = navigateShopping()

  return (
    <div className='bg-primary w-full text-white flex flex-col md:flex-row items-center relative'>
      <img src={hero_banner} className=''/>
      <div className='flex flex-1 justify-center h-4/5 items-center absolute bg-white w-1/2 rounded-r-lg'>
        <div className='flex flex-col justify-center items-center text-primary'>
          <h1 className='text-[36px] sm:text-[70px] font-extrabold py-6 px-0 sm:px-6 leading-none'>
            {heroMain.title}
          </h1>
          <p className='text-[30px] leading-6 sm:leading-10 sm:px-6 pb-6 text-tertiary text-center max-w-[450px]'>
            {heroMain.desc}
          </p>
          <div className='w-1/3'>
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