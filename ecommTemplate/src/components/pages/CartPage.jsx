import { Favorites, CartMain, OrderSummary } from "../cart"
import { BrowsingHistory, SmallCard } from "../shopping"
import { yeti45 } from '../../assets/images/products'
import CarouselTemplate from "../cardsAndCarousels/CarouselTemplate"


const cartItems = [  
    {name: 'Tundra - Hard 45 Cooler', img:yeti45, quant:1, stock:6},
    {name: 'Chair 2', img:yeti45, quant:1, stock:10},
    {name: 'Chair 2', img:yeti45, quant:4, stock:10},
]

const favorites = [
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test610', img: yeti45, price:'$33.33'},
]

const CartPage = () => {

    const header = (
        <div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-tertiary p-2 mt-8'>
        Your Browsing History
        </div>
    )

    function scrollN(){
    if (window.innerWidth < 680) {
        return 1
    } else if (window.innerWidth < 1200) {
        return 2
    } else {
        return 3
    }
    }
  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full'>
            <div className='flex flex-col w-full'>
                <div className="flex flex-row">
                    <div className='rounded-md w-3/5 mt-6'>
                        <h1 className="text-[40px] font-bold leading-none pt-1">
                            Cart
                        </h1>
                        <p className="leading-none pb-1">
                            {cartItems.length} Items
                        </p>
                    </div>
                    <div className="flex justify-start items-end">
                        <div className="ml-3">
                            <h1 className="text-[30px] font-bold">
                                Order Summary
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-3">
                    <div className="w-3/5">
                        <div className='grow-0'>
                            <CartMain
                                cartItems={cartItems}
                            />
                        </div>

                    </div>
                    <div className='w-2/5 ml-3'>
                        <OrderSummary/>
                    </div>
                </div>
            </div>
            <div>
                <Favorites
                    favorites={favorites}
                />
            </div>
            <div>
                <BrowsingHistory/>
            </div>
        </div>
    </div>

  )
}

export default CartPage