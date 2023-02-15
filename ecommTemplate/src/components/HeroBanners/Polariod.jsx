import {polariod_banner} from '../../assets/images'

function Polariod () {
  return (
    <div className='inline-flex w-100 cursor-pointer'>
      <img src={polariod_banner} className='relative'/>
      <div className='absolute top-1/2 w-[66%] h-[40%] flex flex-col justify-center items-center my-6'>
        <h1 className='text-[48px] font-[900] leading-none p-3 br-text-outline-thick text-center'>
          Capture Moments <br/> that will Last Forever
        </h1>
        <h1 className='text-[30px] br-text-outline-thick underline hover:scale-105'>
          Check Out Cameras
        </h1>
      </div>
    </div>
  )
}

export default Polariod