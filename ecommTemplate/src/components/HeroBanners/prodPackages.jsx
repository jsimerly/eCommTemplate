import {prod_package} from '../../assets/images/'

function ProdPackages() {
  return (

    <div className='inline-flex w-100'>
    <img src={prod_package}/>
    <div className='absolute'>
      Never Charge for Shipping
    </div>
  </div>
  )
}

export default ProdPackages