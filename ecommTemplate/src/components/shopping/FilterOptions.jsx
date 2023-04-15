import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { useState } from 'react';

const OptionComp = ({option, option_index, handleCheckboxClicked}) => {
    const [open, setOpen] = useState(true)
    return(
        <div className=''>
            <div 
                className='flex flex-row justify-between items-center hover:underline cursor-pointer'
                onClick={()=> setOpen((open) => !open)}
            >
                <h3 className='text-[24px]'>
                    {option.display_name}
                </h3>
                { open ? 
                    <ExpandMoreIcon/>
                    :
                    <ExpandLessIcon/>
                }
            </div>
            <div className={`${open? null : 'hidden'}`}>
                {option.tags.map((tag, i) => {
                    return (
                        <div
                            className='flex flex-row items-center justify-start hover:underline cursor-pointer'
                            key={'tag_'+i}
                            onClick={()=>handleCheckboxClicked(option_index, i)}
                        >
                            <span className='text-primary mx-1'>
                                {tag.checked ? 
                                    <CheckBoxIcon/>
                                    : 
                                    <CheckBoxOutlineBlankIcon/>
                                }
                            </span>
                            {tag.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const FilterOptions = ({filters, handleCheckboxClicked}) => {
  return (
    <div 
        className='bg-white rounded-md p-2 min-w-[300px]'
      >
        <div className='flex justify-between'>
          <p className='text-[20px]'>
            Filter Options
          </p>
          <CloseIcon
            onClick={() => closeFunc(false)}
            className='hover:scale-105 cursor-pointer'
          />
        </div>
        {filters.map((option, i) => {
            return (
                <OptionComp
                    key={'option_comp_'+i}
                    option={option}
                    option_index={i}
                    handleCheckboxClicked={handleCheckboxClicked}
                />
            )
        })}
      </div>
  )
}

export default FilterOptions