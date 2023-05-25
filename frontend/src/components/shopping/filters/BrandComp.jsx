import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from "react"


const BrandComp = ({brands, handleBrandCheckClicked}) => {
    const [open, setOpen] = useState(true)
    const [showAll, setShowAll] = useState(false)

    const displayedBrands = showAll ? brands : brands.slice(0,6)
    const remainingBrandsLen = brands.length - displayedBrands.length
    
  return (
    <div className=''>
        <div 
            className='flex flex-row justify-between items-center hover:underline cursor-pointer'
            onClick={()=> setOpen((open) => !open)}
        >
            <h3 className='text-[24px]'>
                Brands
            </h3>
            { open ? 
                <ExpandMoreIcon/>
                :
                <ExpandLessIcon/>
            }
        </div>
        <div className={`${open? null : 'hidden'}`}>
            {displayedBrands.length !== 0 && displayedBrands.map((brand, i) => {
                return (
                    <div
                        className='flex flex-row items-center justify-start hover:underline cursor-pointer'
                        key={'tag_'+i}
                        onClick={()=>handleBrandCheckClicked(i)}
                    >
                        <span className='text-primary mx-1'>
                            {brand.checked ? 
                                <CheckBoxIcon/>
                                : 
                                <CheckBoxOutlineBlankIcon/>
                            }
                        </span>
                        {brand.name}
                    </div>
                )
            })}
            <div className='pl-1 pt-2'>
                {remainingBrandsLen > 0 && !showAll &&
                    <button
                        className='underline'
                        onClick={()=>setShowAll(true)}
                    >
                        Show {remainingBrandsLen} More...
                    </button>
                }
                {remainingBrandsLen == 0 && showAll &&
                    <button
                        className='underline'
                        onClick={()=>setShowAll(false)}
                    >
                        Show Less...
                    </button>    
                }
           </div>
        </div>
    </div>
  )
}

export default BrandComp