import { useState, useContext, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { What, Where, When } from './tripInfo';
import {ShoppingContext } from '../context';
import useClickOutside from '../hooks/useClickOutside';
import navigateShopping from '../hooks/navigateShopping';

const Searchbar = ({immediateSearch}) => {

    const {selectedDateRange, selectedDestination, selectedCategory,} = useContext(ShoppingContext)
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
    
    let handleSearch = navigateShopping()

  return (
        <div 
        className='flex-1 flex flex-col sm:flex-row items-center justify-center relative'
        >

            <div className='w-1/4 h-[40px] flex border'>
                <Where/>
            </div>
            <div className='w-1/4 h-[40px] flex'>
                <When/> 
            </div>
            <div className='w-1/4 h-[40px] flex'>
                <What/>
            </div>
            {immediateSearch ? 
                null
                :
                <div className='flex justify-center itmes-center'>
                    <button 
                        className='rounded-md bg-primary text-white flex flex-1 justify-center items-center h-[40px] w-[40px]'
                        onClick={handleSearch}
                    >
                        <SearchIcon className='scale-125 hover:scale-150'/>
                    </button>
                </div>
            }

        </div>
  )
}

export default Searchbar