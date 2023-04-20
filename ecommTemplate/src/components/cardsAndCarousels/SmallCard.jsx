import AddIcon from '@mui/icons-material/Add';
import { fetchItemsToCart } from '../../api/fetchCart';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';
import navigateProduct from '../../hooks/navigateProduct';
import ErrorBoundry from '../utils/ErrorBoundry';
import navigateCart from '../../hooks/navigateCart';

const SmallCard = ({item, addExtraFunction}) => {
  const slug = item.slug
  const {setCartSize, handleNotification} = useContext(ShoppingContext)
  const inCart = location.pathname === '/cart';

  let navigate = navigateProduct({slug});

  const GoToCart = () => (
    <div 
      className='cursor-pointer hover:underline px-2 py-1 bg-primary text-white rounded-md'
      onClick={navigateCart()}
    >
      View Cart & Check Out
    </div>
  )

  const handleAddItemClicked = async () =>{
    const response = await fetchItemsToCart([item])
    if (response.ok){
      const resp = await response.json()
      setCartSize(resp['cart_size'])

      if (addExtraFunction){
        addExtraFunction()
      }

      if (!inCart){ //using === to prevent and undefined/null from getting through
        handleNotification(`${item.name} has been added to your cart.`, <GoToCart/>)
      }
    } else {
      handleNotification(`We're currently experiencing issues and were unable to add ${item.name} to your cart.`)
    }
  }

  const getCost = (item) => {

    const itemTotalCost = (parseFloat(item.base_cost) + (parseFloat(item.daily_cost) * parseInt(item.days)))
    const totalCost = itemTotalCost

    return  totalCost
  }

  return (
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
    <div className="bg-white m-1 p-2 flex flex-col rounded-md shadow-md">
      <div className="w-[150px] h-[150px] mb-2 cursor-pointer">
        <img
          className="bg-white object-scale-down rounded-md"
          src={item.main_image.image}
          onClick={navigate}
          />
      </div>
      <div 
        className="mb-2 min-h-[45px] max-w-[150px] text-[14px] hover:underline cursor-pointer font-semibold"
        onClick={navigate}
        >
        {item.name}
      </div>
      <div className="flex flex-row justify-between">
        <div>
          ${getCost(item).toFixed(2)}
        </div>
        <div className='text-white bg-primary rounded-md cursor-pointer'>
          <AddIcon
            onClick={handleAddItemClicked}
          />
        </div>
      </div>
    </div>
    </ErrorBoundry>
  )
}

export default SmallCard