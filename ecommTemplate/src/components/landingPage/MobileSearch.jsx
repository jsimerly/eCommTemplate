import { When, What, Where } from "../tripInfo"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BlueButton } from "../utils"
import navigateShopping from '../../hooks/navigateShopping';
import navigateSearch from "../../hooks/navigateSearch";
import { useState } from "react";

const MobileSearch = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
  const [open, setOpen] = useState(false)

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
    <div className="fixed bottom-0 left-0 w-full sm:hidden p-4 flex flex-col bg-white rounded-md mt-6 z-50">
      {open ?
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
        <div>
          Test
        </div>
      }
    </div>
  )
}

export default MobileSearch