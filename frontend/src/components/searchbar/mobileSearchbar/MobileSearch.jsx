import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { BlueButton } from "../../utils"
import navigateShopping from '../../../hooks/navigateShopping';
import navigateSearch from "../../../hooks/navigateSearch";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useContext } from "react";
import { ShoppingContext } from "../../../context";
import useClickOutside from "../../../hooks/useClickOutside";
import SlideUp from './SlideUp';

const MobileSearch = ({immediateSearch, searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
  const {selectedCategory, selectedDateRange, selectedDestination} = useContext(ShoppingContext)

  const [showSlideUp, setShowSlideUp] = useState(false)
  const [activePopup, setActivePopup] = useState(null)

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
    setShowSlideUp(true)
    setActivePopup('where')
  }

  const handleCalendarClicked = () => {
    setShowSlideUp(true)
    setActivePopup('when')
  }

  const handleCategoriesClicked = () => {
    setShowSlideUp(true)
    setActivePopup('what')
  }


  return (
    <div className="relative">
      <div 
      ref={node}
      className={`fixed -bottom-[330px] left-0 w-full sm:hidden flex flex-col bg-white z-50
      transition-transform duration-300
      ${showSlideUp ?  '-translate-y-[330px]' : 'transform translate-y-0'}`}>
        <div className="text-neutralDark w-full px-4 py-2">
          <div className="flex flex-row justify-between">
            <div 
              className={`flex justify-center items-center ${selectedDestination ? 'text-neutralDark' : 'text-neutralLight'}`}
              onClick={handleLocationClicked}
            >
              <LocationOnIcon sx={{fontSize: 40}}/>
            </div>
            <div 
              className={`flex justify-center items-center ${selectedDateRange?.first ? 'text-neutralDark' : 'text-neutralLight'}`}
              onClick={handleCalendarClicked}
            >
              <CalendarMonthIcon sx={{fontSize: 40}}/>
            </div>
            <div 
              className={`flex flex-row items-center w-1/2 ${selectedCategory ? 'text-neutralDark' : 'text-neutralLight'}`}
              onClick={handleCategoriesClicked}
            >
              <BeachAccessIcon sx={{fontSize: 40}}/> 
              <h3 className="ml-2 text-[16px] font-bold truncate">
                {selectedCategory ? selectedCategory.name : 'Select a Category'}
              </h3>
            </div>
            {!immediateSearch &&
              <div>
                <BlueButton 
                  content={<SearchIcon sx={{fontSize: 30}}/>}
                  onClick={handleGoClick}
                />
              </div>
            }
          </div>
        </div>
        <SlideUp
          open={showSlideUp}
          setOpen={setShowSlideUp}
          activePopup={activePopup}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchParamActive={setSearchParamActive}
        />
      </div>
    </div>
  )
}

export default MobileSearch
