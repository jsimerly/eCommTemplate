import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';




const CheckboxFilter = ({checkFilterOptions, setCheckFilterOptions}) => {
    const [open, setOpen] = useState(true)

       
    const handleCheckboxClicked = (name, tag, checked) => {
       let new_list = checkFilterOptions
       new_list.map((category,i) => {
        if(category.name == name){
            category['tags'][tag] = !category['tags'][tag]

            setCheckFilterOptions([...new_list])
        }
       })
    }

  return (
    <div>
        {checkFilterOptions.map((category, i) => (
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
                    { Object.entries(category.tags).map((tag, i) => {
                        const name = tag[0]
                        const checked = tag[1]
                        return (
                            <div className="flex ml-2">
                                <div>
                                    {checked ? 
                                        <CheckBoxIcon
                                            className="cursor-pointer"
                                            onClick={() => handleCheckboxClicked(category.name, name, checked)}
                                        />
                                        :
                                        <CheckBoxOutlineBlankIcon
                                            className="cursor-pointer"
                                            onClick={() => handleCheckboxClicked(category.name, name, checked)}
                                        />
                                    }
                                </div>
                                <p className="ml-2">
                                    {name}
                                </p>
                            </div>
                        )})}
                </div>
            </div>
        ))}

    </div>
  )
}

export default CheckboxFilter