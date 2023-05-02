import navigateCart from '../../hooks/navigateCart';

const GoToCart = () => (
    <div 
      className='cursor-pointer hover:underline px-2 py-1 bg-primary text-white rounded-md w-full text-[12px] sm:text-[18px] min-w-[100px] text-center'
      onClick={navigateCart()}
    > 
      Go to Cart
    </div>
  )

export default GoToCart