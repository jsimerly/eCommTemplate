import {banner_flamingo} from '../../assets/images/'

const NewCustomers = () => {
  return (
    <div className='flex w-full  rounded-md cursor-pointer bg-gradient-to-bl  relative'>
      <img src={banner_flamingo}
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
        <div className='w-full flex justify-center items-center text-white text-[48px] font-[900]'>
          <button className='bg-white text-primary p-3 rounded-md my-6 font-bold w-[180px] text-[24px] hover:underline'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewCustomers