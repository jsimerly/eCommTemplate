import { beach_banner } from '../../assets/images'

function Beach () {
  return (
    <div className='cursor-pointer'>
      <img src={beach_banner}/>
      <div className='absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-tertiary text-[48px] font-[900] br-text-outline-thick-white text-center'>
          Doing Nothing has Never been this Easy
        </h1>
        <h1 className='text-tertiary text-[30px] br-text-outline-normal-white underline hover:scale-105 text-center'>
          Click here to do nothing
        </h1>
      </div>
    </div>
  )
}

export default Beach