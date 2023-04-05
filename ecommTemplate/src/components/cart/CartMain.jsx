
import CartItemCard from './CartItemCard';
import FreeItemCard from './FreeItemCard';

const CartMain = ({items, freeItems, updateCartItem, itemCount, totalCost, deleteCartItem, getInsurance, getCost}) => {
  return (
    <div className='w-full bg-white rounded-md p-6'>
        <h3 className='pb-3'>
          Great choices! However, please note that adding an item to your cart doesn't guarantee availability. We recommend checking out now before it's sold out.
        </h3>
          {items && items.map((item, i) => {
            return (
              <CartItemCard
                item={item}
                updateCartItem={updateCartItem}
                deleteCartItem={deleteCartItem}
                getCost={getCost}
                getInsurance={getInsurance}
                key={'cart_item_card_'+i}
              />
          )})}
          {freeItems && freeItems.map((item, i) => {
            return (
              <FreeItemCard
                item={item}
                getInsurance={getInsurance}
                updateCartItem={updateCartItem}
                key={'free_item_card_'+i}
              />
            )
          })}
          
        <div className='w-full flex justify-center items-center'>
          <div className='pt-2 px-3 text-[24px] '> Total ({itemCount} items): <span className='font-bold'> ${totalCost.toFixed(2)}</span> </div>
        </div>
    </div>
  )
}

export default CartMain