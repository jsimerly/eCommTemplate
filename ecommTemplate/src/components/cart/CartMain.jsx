
import CartItemCard from './CartItemCard';
import FreeItemCard from './FreeItemCard';
import { cartMain } from '../../../constants/pages/cart_copy';
import { Empty } from '../utils';

const CartMain = ({items, freeItems, updateCartItem, updateFreeItem, itemCount, totalCost, deleteCartItem, handleFetchCart, getInsurance, getCost}) => {
  return (
    <div className='w-full bg-white rounded-md p-6'>
        <h3 className='pb-3'>
          {cartMain.header}
        </h3>
        {items && items.length > 0 ? (
          items.map((item, i) => (
            <CartItemCard
              item={item}
              updateCartItem={updateCartItem}
              deleteCartItem={deleteCartItem}
              handleFetchCart={handleFetchCart}
              getCost={getCost}
              getInsurance={getInsurance}
              key={'cart_item_card_'+i}
            />
          ))
        ) : (
          <Empty />
        )}
        {freeItems && freeItems.map((item, i) => {
          return (
            <FreeItemCard
              item={item}
              getInsurance={getInsurance}
              updateFreeItem={updateFreeItem}
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