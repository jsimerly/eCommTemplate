import { SmallCard} from "../shopping"
import CarouselTemplate from "./CarouselTemplate"

import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../context';
import { fetchAllFavorited, } from '../../api/fetchCart';

const header = (
<div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-tertiary p-2 mt-8 '>
  You May be Interested In
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

const ItemSuggestion = () => {
  const {selectedDateRange} = useContext(ShoppingContext)
  const [suggestions, setSuggestions] = useState([])

  //replace this fetch with ItemSuggestion endpoint
  useEffect(()=>{
    fetchAllFavorited(setSuggestions, selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
  },[selectedDateRange])

  return (
    <CarouselTemplate
      Card={SmallCard}
      cardData={suggestions}
      cardW={156}
      header={header}
      scrollNFunc={scrollN}
    />
  )
}

export default ItemSuggestion