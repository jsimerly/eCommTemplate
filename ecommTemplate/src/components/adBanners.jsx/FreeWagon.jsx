import {free_wagon} from '../../assets/images/'

const FreeWagon = () => {
  return (
    <div className='flex w-full rounded-md cursor-pointer bg-gradient-to-bl  relative'>
      <img src={free_wagon}
      className='flex rounded-md'
      />
        <div 
          className='absolute w-[45%] h-[85%] flex justify-center items-center'
        >
            <div className='flex flex-col justify-center text-primary font-bold text-[30px]'>
                <h1>
                    Orders Over $70
                </h1>
                <h1 className='pl-16'>
                    Get a <span className='bg-primary text-white pl-2 mr-1 rounded-md'> Free </span> Wagon
                </h1>
            </div>
        </div>
        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
            <button className='bg-white text-primary p-3 rounded-md font-bold w-[180px] text-[24px] border border-primary hover:underline'>
            Shop Now
          </button>
        </div>
    </div>
  )
}

export default FreeWagon