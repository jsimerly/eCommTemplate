import { FreqBoughtCard } from './'
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { BlueButton } from '../utils';
import { isDictInList } from '../utils'
import { fetchItemsToCart } from '../../api/fetchCart';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingContext } from '../../context';
import GoToCart from '../cardsAndCarousels/GoToCart';


const BoughtTogether = ({frequentlyBought}) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0)
  const [days, setDays] = useState(7)
  const location = useLocation();
  const inCart = location.pathname === '/cart';
  const {setCartSize, handleNotification} = useContext(ShoppingContext)

  function calculateTotalCost(checkedItems) {

    let newCost = 0
    checkedItems.map((item, i) => {
      newCost += parseFloat(item.total_cost)
    })
    return newCost
  }

  const handleCheckboxClick = (item) => {
    const itemSlugIndex = checkedItems.indexOf(item);
    if (itemSlugIndex >= 0) {
      const newCheckedItems = [...checkedItems];
      newCheckedItems.splice(itemSlugIndex, 1);
      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  useEffect(()=> {
    const newTotalCost = calculateTotalCost(checkedItems)
    setTotalCost(newTotalCost)
  }, [checkedItems])

  useEffect(()=> {
    if (frequentlyBought && frequentlyBought.length > 0) {
      setCheckedItems(frequentlyBought.map(item => item));
      if (frequentlyBought[0].days) {
        setDays(frequentlyBought[0].days);
      }
    }
  }, [frequentlyBought])

  const handleAddToCartClicked = async () => {
    const response = await fetchItemsToCart(checkedItems)
    if (response.ok){
      const resp = await response.json()
      setCartSize(resp['cart_size'])
      if (!inCart){
        if (checkedItems.length === 1){
          handleNotification(`1 item has been added to your cart.`, <GoToCart/>)
        } else if (checkedItems.length >= 2){
          handleNotification(`${checkedItems.length} items have been added to your cart.`, <GoToCart/>)
        }
      }
    }
  }

  return (
    <div className='my-6 bg-white rounded-md pb-6 px-3 sm:px-16 text-neutralDark justify-center flex flex-col items-center'>
        <h1 className="text-[30px] py-4">
            Frequently Bought Together
        </h1>
        <div className='flex flex-row flex-wrap justify-center'>
          {frequentlyBought && frequentlyBought.map((item, i) => {
            return(
              <div key={"productPair_"+i} className='flex flex-row flex-wrap justify-center items-center'>
                <FreqBoughtCard
                  item={item}
                  handleCheckClicked={() => handleCheckboxClick(item)}
                  checked={isDictInList(item, checkedItems)}
                />
              </div>
            )
          })}
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-row'>
            <p>Subtotal: </p>
            <div className='flex flex-col items-center justify-start ml-1'>
              <p ><span className='font-semibold text-[18px]'> ${totalCost.toFixed(2)}</span> (4 items)</p>
              <p className='leading-none text-[12px]'>For {days} Days</p>
            </div>
          </div>
          <div className='ml-2' >
            <BlueButton
              content='Add to Cart'
              onClick={handleAddToCartClicked}
            />
          </div>
        </div>
    </div>
  )
}

export default BoughtTogether