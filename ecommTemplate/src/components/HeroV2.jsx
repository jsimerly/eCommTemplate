import HeroCarousel from './HeroCarousel'

const HeroV2 = () => {
  return (
    <div className='bg-primary w-full h-[600px] text-white flex'>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-[500px] text-center'>
          <h1 className='text-[56px] font-extrabold mb-6'>
            Make Memories.
            Not Compromises.
          </h1>
          <p className='text-[24px]'>
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