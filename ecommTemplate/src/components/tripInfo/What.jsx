import { useContext, useState } from "react";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SearchIcon from '@mui/icons-material/Search';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";

const What = () => {
    //add search ability to this at some point
    const {setSelectedCategory, selectedCategory, allCategories} = useContext(ShoppingContext)
    const [openCategory, setOpenCategory] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [searchParamActive, setSearchParamActive] = useState(false)
 
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openCategory ? '' : 'hidden'} shadow-md z-10`}>
            <div className="relative">
                <input 
                    className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e)=> {setSearchInput(e.target.value); setSearchParamActive(true)}}
                />
                <SearchIcon className="absolute -translate-y-1/2 top-1/2 right-2 scale-125 hover:scale-150 cursor-pointer"/>
            </div>
            <h1 className='w-full text text-tertiary font-bold text-[22px] py-2'>
                Categories
            </h1>
            <div className='grid grid-cols-5 text-tertiary'>
                {allCategories?.map((cat, i) => (
                    <div key={i} className='last:hidden'>
                        <h3 
                            className='font-bold text-[18px] px-2 cursor-pointer hover:underline'
                            onClick={()=> {handleSelect(cat)}}
                        >
                            {cat.name}
                        </h3>
                        <ul>
                            {cat.sub?.map((subCat, i) => (
                                <li 
                                    key={i}
                                    className='pl-4 cursor-pointer hover:underline truncate'
                                    onClick={()=> handleSelect(subCat)}
                                >
                                    {subCat.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h4 
                className='w-full text-center underline text-tertiary cursor-pointer hover:scale-105 mt-2'
                onClick={()=> {
                    setSelectedCategory({
                        name: 'All Categories',
                        link: '',
                        type:'full',
                        id:'0000'
                    });
                    setOpenCat(false)
                }}
            >
                All Categories
            </h4>
        </div>
    )

    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setOpenCategory(false);
        setSearchParamActive(false)
    }

    const node = useClickOutside(() => {
        setOpenCategory(false)
    })
    
    const getDisplayData = () => {
        if (searchParamActive){
            console.log('-')
            return searchInput
        }
        console.log('1')
        return selectedCategory.name
    }

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpenCategory}
            selectedData={getDisplayData()}
            dropdown={dropdown}
            placeholder={'What'}
            icon={BeachAccessIcon}
        />
    </div>
  ) 
}

export default What