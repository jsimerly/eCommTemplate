import {polariod_banner} from '../../assets/images/banners'

function Polariod () {
  return (
    <div className='inline-flex w-100 cursor-pointer relative'>
      <img src={polariod_banner}/>
      <div className='absolute top-1/2 w-[66%] h-[40%] flex flex-col justify-center items-center my-6'>
        <h1 className='text-tertiary text-[48px] font-[900] leading-none p-3  text-center'>
          Capture Moments <br/> that will Last Forever
        </h1>
        <h1 className='text-tertiary text-[30px] underline hover:scale-105'>
          Check Out Cameras
        </h1>
      </div>
    </div>
  )
}

export default Polariod