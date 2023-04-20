import {new_cust_banner} from '../../assets/images/banners'
import navigateShopping from '../../hooks/navigateShopping'
import { LargeWhiteButton, LargeBlueButton } from '../utils'

const NewCustomers = () => {
  let navShopping = navigateShopping()

  const handleClick = () => {
    navShopping()
  }
  
  return (
    <div 
      className='flex w-full rounded-md cursor-pointer bg-gradient-to-bl relative'
      onClick={handleClick}
    >
      <img src={new_cust_banner}
      className='flex rounded-md'
      />
      <div className='absolute grid grid-cols-3 w-full h-full'>
        <div 
          className='w-full  flex justify-center items-center text-white text-[48px] font-[900] leading-none p-3 br-text-outline-thick'
        >
            First Time? <br/> Save 20%
        </div>
        <div className='w-full'>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[180px] h-[60px] shadow-md'>
            <LargeWhiteButton
              content='Shop Now'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCustomers