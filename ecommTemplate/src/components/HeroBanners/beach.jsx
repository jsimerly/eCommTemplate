import {leisure} from '../../assets/images'

function Beach () {
  return (
    <div className='inline-flex w-100'>
      <img src={leisure} className='relative'/>
      <div className='absolute'>
        Beach
      </div>
    </div>
  )
}

export default Beach