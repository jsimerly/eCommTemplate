import { When, What, Where } from "../tripInfo"
import { BlueButton } from "../utils"
import navigateShopping from '../../hooks/navigateShopping';
import navigateSearch from "../../hooks/navigateSearch";

const MobileSearch = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {


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
    <div className="sm:hidden p-4 flex flex-col bg-white rounded-md m-4 mt-6">
      <h2 className="text-tertiary w-full text-center text-[24px]">Trip Info</h2>
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

    </div>
  )
}

export default MobileSearch