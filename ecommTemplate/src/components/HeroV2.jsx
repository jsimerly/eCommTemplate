import HeroCarousel from './HeroCarousel'

const HeroV2 = () => {
  return (
    <div className='bg-primary w-full max-h-[600px] text-white flex flex-col sm:flex-row'>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-[520px] text-center'>
          <h1 className=' text-[36px] md:text-[56px] font-extrabold py-6 sm:px-6 leading-none'>
            Make Memories. <br/>
            Not Compromises.
          </h1>
          <p className='text-[24px] leading-6 sm:leading-10 px-6 pb-6'>
            Rent products to be dropped off and picked up on your next vacation.
          </p>
          <button className='bg-white text-primary p-3 rounded-md my-6 font-bold w-[180px] text-[18px] hover:underline'>
            Shop Now
          </button>
        </div>

      </div>
      <HeroCarousel/>
    </div>
  )
}

export default HeroV2