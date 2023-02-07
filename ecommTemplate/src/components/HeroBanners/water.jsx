import { unicorn_image } from '../../assets/images/'

function Water() {
  return (
    <div className='inline-flex'>
      <img src={unicorn_image}/>
      <div className='absolute'>
        Order today for free wagon
      </div>
  </div>
  )
}

export default Water