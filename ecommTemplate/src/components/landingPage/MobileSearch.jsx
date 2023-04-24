import { When, What, Where } from "../tripInfo"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { BlueButton } from "../utils"
import navigateShopping from '../../hooks/navigateShopping';
import navigateSearch from "../../hooks/navigateSearch";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useContext } from "react";
import { ShoppingContext } from "../../context";

const MobileSearch = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
  const [open, setOpen] = useState(false)
  
  const {setSelectedCategory, selectedCategory, setSelectedDateRange, selectedDateRange, setSelectedDestination, selectedDestination} = useContext(ShoppingContext)

  let handleShopping= navigateShopping()
  let handleSearch = navigateSearch()   

  const handleGoClick = () =>{
    if (searchParamActive){
        handleSearch(searchInput)
        return
    } 
    handleShopping()
  }
  
  return (
    <div className="fixed bottom-0 left-0 w-full sm:hidden p-4 flex flex-col bg-white mt-6 z-50 border border-primary">
      {/* {open ?
        <div className="flex flex-col gap-2">
          <div className="h-[60px]">
            <Where/>
          </div>
          <div className="h-[60px]">
            <When/>
          </div>
          <div className="h-[60px]">
            <What
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchParamActive={searchParamActive}
              setSearchParamActive={setSearchParamActive}
            />
          </div>
          <div className='flex justify-center itmes-center'>
            <BlueButton
                onClick={handleGoClick}
                content={'Search'}
            />
          </div>
        </div>
        :
        <div className="text-tertiary w-full">
          <div className="flex flex-row justify-between">
            <div className={`mx-2 ${selectedCategory ? 'text-tertiary' : 'text-tertiaryTone-300'}`}>
              <LocationOnIcon sx={{fontSize: 40}}/>
            </div>
            <div className="mx-2">
              <CalendarMonthIcon sx={{fontSize: 40}}/>
            </div>
            <div className="mx-2 w-full flex flex-row items-center just">
              <BeachAccessIcon sx={{fontSize: 40}}/> 
              <h3 className="ml-2 text-[20px] font-bold truncate">
                {selectedCategory.name}
              </h3>
            </div>
          </div>
        </div>
      } */}
    </div>
  )
}

export default MobileSearch