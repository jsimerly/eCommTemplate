import {cancel_banner} from '../../assets/images'

function Cancel() {
  return (
    <div className='cursor-pointer relative'>
      <img src={cancel_banner}/>
      <div className='absolute top-[50%] left-[10%] transform -translate-y-1/2'>
        <h1 className='text-tertiary text-[48px] font-[900] text-center max-w-[360px]'>
          Plans Change.
        </h1>
        <h1 className='text-tertiary text-[40px] font-[900] text-center max-w-[360px]'>
          Cancel Anytime at No Cost
        </h1>
      </div>
    </div>
  )
}

export default Cancel