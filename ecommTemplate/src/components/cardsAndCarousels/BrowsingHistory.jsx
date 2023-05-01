import CarouselTemplate from "./CarouselTemplate"
import { SmallCard } from "../shopping"
import { fetchAllFavorited, fetchBrowseHistory} from '../../api/fetchCart';

import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../context';

const header = (
  <div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-neutralDark p-2 mt-8'>
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

const BrowsingHistory = ({addExtraFunction}) => {
  const {selectedDateRange} = useContext(ShoppingContext)
  const [browsingHistory, setBrowsingHistory] = useState([])

  useEffect(()=>{
    fetchBrowseHistory(setBrowsingHistory, selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
  },[selectedDateRange])

  //replace this fetch with BrowsingHistory endpoint
  return (
    <CarouselTemplate
      Card={SmallCard}
      addExtraFunction={addExtraFunction}
      cardData={browsingHistory}
      cardW={156}
      header={header}
      scrollNFunc={scrollN}
    />
  )
}

export default BrowsingHistory