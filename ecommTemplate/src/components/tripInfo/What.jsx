import { useContext, useState } from "react";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";

const What = () => {
    //add search ability to this at some point
    const {setSelectedCategory, selectedCategory, allCategories} = useContext(ShoppingContext)
    const [openCategory, setOpenCategory] = useState(false)
 
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openCategory ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
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
    }

    const node = useClickOutside(() => {
        setOpenCategory(false)
    })

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpenCategory}
            selectedData={selectedCategory.name}
            dropdown={dropdown}
            placeholder={'What'}
            icon={BeachAccessIcon}
        />
    </div>
  ) 
}

export default What