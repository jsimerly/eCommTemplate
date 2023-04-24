
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { BlueButton } from "./utils"
import navigateShopping from '../hooks/navigateShopping';
import navigateSearch from "../hooks/navigateSearch";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useContext } from "react";
import { ShoppingContext } from "../context";
import useClickOutside from "../hooks/useClickOutside";

const MobileSearch = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
  const {selectedCategory, selectedDateRange, selectedDestination} = useContext(ShoppingContext)

  const [showSlideUp, setShowSlideUp] = useState(false)

  let node = useClickOutside(()=> setShowSlideUp(false))

  let handleShopping= navigateShopping()
  let handleSearch = navigateSearch()   

  const handleGoClick = () =>{
    if (searchParamActive){
        handleSearch(searchInput)
        return
    } 
    handleShopping()
  }

  const handleLocationClicked = () => {
    setShowSlideUp((showSlide) => !showSlide)
  }

  const handleCalendarClicked = () => {
    setShowSlideUp((showSlide) => !showSlide)
  }

  const handleCategoriesClicked = () => {
    setShowSlideUp((showSlide) => !showSlide)
  }

  const SlideUp = () => {
    return(
      <div className="h-[400px]">
        POP UP TIME
      </div>
    )
  }
  
  return (
    <div className="relative">
      <div 
      ref={node}
      className={`fixed -bottom-[400px] left-0 w-full sm:hidden flex flex-col bg-white z-50 border border-primary 
      transition-transform duration-300
      ${showSlideUp ?  '-translate-y-[400px]' : 'transform translate-y-0'}`}>
        <div className="text-tertiary w-full border p-4">
          <div className="flex flex-row justify-between space-x-3">
            <div 
              className={`flex justify-center items-center`}
              onClick={handleLocationClicked}
            >
              <LocationOnIcon sx={{fontSize: 40}}/>
            </div>
            <div 
              className="flex justify-center items-center"
              onClick={handleCalendarClicked}
            >
              <CalendarMonthIcon sx={{fontSize: 40}}/>
            </div>
            <div 
              className="flex flex-row items-center w-1/2"
              onClick={handleCategoriesClicked}
            >
              <BeachAccessIcon sx={{fontSize: 40}}/> 
              <h3 className="ml-2 text-[16px] font-bold truncate">
                Select a Category
              </h3>
            </div>
            <div>
              <BlueButton 
                content={<SearchIcon sx={{fontSize: 30}}/>}
                onClick={handleGoClick}
              />
            </div>
          </div>
        </div>
        <SlideUp/>
      </div>
    </div>
  )
}

export default MobileSearch