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
        <div className={`${openCategory ? '' : 'hidden'}`}>
            DROPDOWN
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