import HeroCarousel from './HeroCarousel'

const HeroV2 = () => {
  return (
    <div className='bg-primary w-full text-white flex flex-col md:flex-row'>
      <div className='flex flex-1 justify-center items-center'>
        <div className='text-center my-10 mx-6 sm:m-20'>
          <h1 className=' text-[36px] sm:text-[56px] font-extrabold py-6 px-0 sm:px-6 leading-none'>
            Make Memories. <br/>
            Not Compromises.
          </h1>
          <p className='text-[24px] max-w-[600px] leading-6 sm:leading-10 sm:px-6 pb-6'>
            Rent products to be dropped off and picked up on your next vacation.
          </p>
          <button className='bg-white text-primary p-3 rounded-md  font-bold w-[180px] text-[18px] hover:underline'>
            Shop Now
          </button>
        </div>

      </div>
      <HeroCarousel/>
    </div>
  )
}

export default HeroV2