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

  let displayData = ''

  if (searchParamActive){
    displayData = searchInput
  } else if (selectedCategory) {
    displayData = selectedCategory.name
  } else {
    displayData = ''
  }





  return (
    <div className="relative">
      <div 
      ref={node}
      className={`fixed -bottom-[330px] left-0 w-full sm:hidden flex flex-col bg-white z-50
      transition-transform duration-300
      ${showSlideUp ?  '-translate-y-[330px]' : 'transform translate-y-0'}`}>
        <div className="text-neutralDark w-full border-t pr-2">
          <div className="flex flex-row">
            <div className='flex flex-row w-full'>
              <div 
                className={`flex flex-col justify-center items-center w-[20%] pt-2 pb-1  ${ selectedDestination ? 'text-neutralDark' : 'text-neutralLight'}
                ${ showSlideUp && activePopup === 'where' ? 'border-primary' : 'border-white'} border-t-2
                `}
                onClick={handleLocationClicked}
              >
                <LocationOnIcon sx={{fontSize: 30}}/>
                <span className='text-[10px]'>
                  Where
                </span>
              </div>
              <div 
                className={`flex flex-col justify-center items-center w-[20%] pt-2 pb-1 ${ selectedDateRange?.first ? 'text-neutralDark' : 'text-neutralLight'}
                ${ showSlideUp && activePopup === 'when' ? 'border-primary' : 'border-white'} border-t-2`}
                onClick={handleCalendarClicked}
              >
                <CalendarMonthIcon sx={{fontSize: 30}}/>
                <span className='text-[10px]'>
                  When
                </span>
              </div>
              <div 
                className={` flex flex-row items-center w-[60%] pt-2 pb-1 
                ${ displayData ? 'text-neutralDark' : 'text-neutralLight'}
                ${ showSlideUp && activePopup === 'what' ? 'border-primary' : 'border-white'} border-t-2
                border`}
                onClick={handleCategoriesClicked}
              >
                <div className='w-[10%]'></div>
                <div className='flex flex-col items-center'>
                  <BeachAccessIcon sx={{fontSize: 30}}/> 
                  <span className='ml-1 text-[10px]'>
                    What
                  </span>
                </div>
                <h3 className="ml-4 text-[14px] font w-[70%] line-clamp-2">
                  {displayData ? displayData : 'Select a Category'}
                </h3>
              </div>
            </div>
            {!immediateSearch &&
              <div className='ml-2 pt-2 pb-1'>
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
