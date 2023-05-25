import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import {useState} from 'react';

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

export default OptionComp