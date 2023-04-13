import { useState, useContext, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import {ShoppingContext} from '../context';
import navigateShopping from '../hooks/navigateShopping';
import { What, Where, When } from './tripInfo';
import navigateSearch from '../hooks/navigateSearch';
import { BlueButton } from './utils';
import ErrorBoundry from './utils/ErrorBoundry';


const Searchbar = ({immediateSearch, searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {

    const {selectedDateRange, selectedDestination, selectedCategory, } = useContext(ShoppingContext)
    const [mounted, setMounted] = useState(false)
    const useNavShopping = navigateShopping()

    useEffect(() => {
        if (mounted) {
            if(immediateSearch){
                useNavShopping()
            }
        } else {

            setMounted(true)
        }
    }, [selectedDestination, selectedCategory, selectedDateRange])


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
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
    <div 
    className='flex-1 flex flex-col sm:flex-row items-center justify-center relative'
    >

        <div className='w-1/4 h-[40px] flex'>
            <Where/>
        </div>
        <div className='w-1/4 h-[40px] flex'>
            <When/> 
        </div>
        <div className='w-1/4 h-[40px] flex'>
            <What
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                searchParamActive={searchParamActive}
                setSearchParamActive={setSearchParamActive}
            />
        </div>
        {immediateSearch ? 
            null
            :
            <div className='flex justify-center itmes-center'>
                <BlueButton
                    onClick={handleGoClick}
                    content={<SearchIcon className='scale-125 hover:scale-150'/>}
                    />
            </div>
        }
    </div>
    </ErrorBoundry>
  )
}

export default Searchbar