import CarouselTemplate  from "../cardsAndCarousels/CarouselTemplate"

import { SmallCard} from "../shopping"
import { fetchSuggestions, } from '../../api/fetchCart';

import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../../context';

function scrollN(){
    if (window.innerWidth < 680) {
      return 1
    } else if (window.innerWidth < 1200) {
      return 2
    } else {
      return 3
    }
  }

const KeepShopping = () => {
  const {selectedDateRange} = useContext(ShoppingContext)
  const [suggestions, setSuggestions] = useState([])

  //replace this fetch with KeepShopping endpoint
  const getSuggestions = async () => {
    const response = await fetchSuggestions(selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
    if (response.ok){
      const resp = await response.json()
      setSuggestions(resp)
    }      
  }

  useEffect(()=>{
    getSuggestions()
  },[selectedDateRange])


  const header = ( 
      <div className="rounded-t-md pt-4 flex justify-center items-center text-neutralDark">
          <h2 className="text-[30px] ">
              Continue Shopping
          </h2>
      </div>
    )
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

export default KeepShopping