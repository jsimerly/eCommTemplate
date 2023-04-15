import { useEffect, useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const CheckBoxFilterCat = ({category, handleCheckboxClicked}) => {
    const [open, setOpen] = useState(true)

    return(
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
                        <div 
                            className="flex ml-2 cursor-pointer" 
                            key={i}
                            onClick={() => handleCheckboxClicked(category.name, name, checked)}
                        >
                            <div>
                                {checked ? 
                                    <CheckBoxIcon/>
                                    :
                                    <CheckBoxOutlineBlankIcon/>
                                }
                            </div>
                            <p className="ml-2">
                                {name}
                            </p>
                        </div>
                    )})}
            </div>
        </div>
    )
}


const CheckboxFilter = ({checkFilterOptions, setCheckFilterOptions, checkForFilterApplied}) => {

    useEffect(() => {
    }, [checkFilterOptions])

    const handleCheckboxClicked = (name, tag) => {
       let new_list = checkFilterOptions
       new_list.map((category,i) => {
        if(category.name == name){
            category['tags'][tag] = !category['tags'][tag]
            setCheckFilterOptions([...new_list])
        }
       });
        checkForFilterApplied()

    }

  return (
    <div>
        {checkFilterOptions.map((category, i) => (
                <CheckBoxFilterCat
                    key={i}
                    category={category}
                    handleCheckboxClicked={handleCheckboxClicked}
                />
        ))}
    </div>
  )
}

export default CheckboxFilter