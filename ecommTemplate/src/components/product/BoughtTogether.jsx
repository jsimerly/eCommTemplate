import { FreqBoughtCard } from './'
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { BlueButton } from '../utils';
import { calculate_product_cost } from '../../assets/util';
import { isDictInList } from '../utils'


const BoughtTogether = ({frequentlyBought}) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0)

  function calculateTotalCost(checkedItems) {
    console.log(checkedItems)
    let newCost = 0
    checkedItems.map((item, i) => {
      newCost += parseFloat(calculate_product_cost(item.base_cost, item.daily_cost, 7))
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
    setCheckedItems(frequentlyBought.map(item => item))
  }, [frequentlyBought])

  return (
    <div className='my-6 bg-white rounded-md pb-6 px-16 text-tertiary justify-center flex flex-col items-center'>
        <h1 className="text-[30px] py-4">
            Frequently Bought Together
        </h1>
        <div className='flex flex-row'>
          {frequentlyBought.map((item, i) => {
            return(
              <div key={"productPair_"+i} className='flex flex-row justify-center items-center'>
                <FreqBoughtCard
                  item={item}
                  handleCheckClicked={() => handleCheckboxClick(item)}
                  checked={isDictInList(item, checkedItems)}
                />
                {frequentlyBought.length-1 == i ? '' : <AddIcon/>}
              </div>
            )
          })}
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-row'>
            <p>Subtotal: </p>
            <div className='flex flex-col items-center justify-start ml-1'>
              <p ><span className='font-semibold text-[18px]'> ${totalCost.toFixed(2)}</span> (4 items)</p>
              <p className='leading-none text-[12px]'>For 7 Days</p>
            </div>
          </div>
          <div className='ml-2' >
            <BlueButton
              content='Add to Cart'
            />
          </div>
        </div>
    </div>
  )
}

export default BoughtTogether