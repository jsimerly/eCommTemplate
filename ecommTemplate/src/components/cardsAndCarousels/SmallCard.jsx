import AddIcon from '@mui/icons-material/Add';
import { fetchItemsToCart } from '../../api/fetchCart';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';
import navigateProduct from '../../hooks/navigateProduct';

const SmallCard = ({item, addExtraFunction}) => {
  const slug = item.slug
  const {setCartSize} = useContext(ShoppingContext)

  let navigate = navigateProduct({slug});

  const handleAddItemClicked = async () =>{
    try{

      const response = await fetchItemsToCart([item.slug])
      const data = await response.json()
      setCartSize(data['cart_size'])
      addExtraFunction()
    } catch (error){
      throw (error)
    }
  }

  const getCost = (item) => {

    const itemTotalCost = (parseFloat(item.base_cost) + (parseFloat(item.daily_cost) * parseInt(item.days)))
    const totalCost = itemTotalCost

    return  totalCost
  }

  return (
  
    <div className="bg-tertiaryTone-100 m-1 p-2 flex flex-col rounded-md">
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
  )
}

export default SmallCard