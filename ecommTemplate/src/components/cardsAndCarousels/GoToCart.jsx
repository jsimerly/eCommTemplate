import navigateCart from '../../hooks/navigateCart';

const GoToCart = () => (
    <div 
      className='cursor-pointer hover:underline px-2 py-1 bg-primary text-white rounded-md'
      onClick={navigateCart()}
    > 
      <span className='hidden sm:block text-[12px] sm:text-[18px]'>View Cart &</span> Checkout
    </div>
  )

export default GoToCart