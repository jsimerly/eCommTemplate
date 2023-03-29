import AddIcon from '@mui/icons-material/Add';
import { fetchItemsToCart } from '../../api/fetchCart';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';

const SmallCard = ({text, img, price}) => {
  const {setCartSize} = useContext(ShoppingContext)

  const handleAddItemClicked = async () =>{
    try{
      const response = await fetchItemsToCart([slug])
      const data = await response.json()
      setCartSize(data['cart_size'])
    } catch (error){
      throw (error)
    }
  }

  return (
  
    <div className="bg-tertiaryTone-100 m-1 p-2 flex flex-col rounded-md">
      <div className="w-[150px] h-[150px] mb-2 cursor-pointer">
        <img
          className="bg-white object-scale-down rounded-md"
          src={img}
        />
      </div>
      <div className="mb-2 min-h-[45px] max-w-[160px] text-[14px] hover:underline cursor-pointer font-semibold">
        {text}
      </div>
      <div className="flex flex-row justify-between">
        <div>
          {price}
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