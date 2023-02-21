import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const CheckboxOption = ({name, defaultChecked}) => {
    const [checked, setChecked] = useState(defaultChecked)
    return (
        <div
            className="flex ml-2"
            onClick={() => setChecked((checked) => !checked)}
        >
            {checked ? 
                <CheckBoxIcon
                    className=""
                /> 
                : 
                <CheckBoxOutlineBlankIcon/>
            }
            <p className="px-2 py-1 truncate">
                {name}
            </p>
        </div>
    )
}


const CheckboxFilter = ({category}) => {
    const [open, setOpen] = useState(true)

  return (
    <div>
        <div 
            className='flex justify-between hover:underline cursor-pointer group'
            onClick={()=> setOpen((open) => !open)}
        >
            <h3 className='text-[24px]'>
              {category.name}
            </h3>
            <ExpandMoreIcon
              className='group-hover:scale-125'
            />
        </div>
        <div className={`${open ? '' : 'hidden'}`}>
            {category.tags.map((tag, i) => (
                <CheckboxOption
                    key={i}
                    name={tag}
                    defaultChecked={category.defaultChecked}
                />
            ))}
        </div>
    </div>
  )
}

export default CheckboxFilter