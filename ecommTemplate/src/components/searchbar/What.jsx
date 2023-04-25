import { useContext } from "react";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import { ShoppingContext } from '../../context';
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";
import WhatDropdown from "./WhatDropdown";



const What = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
    const {selectedCategory} = useContext(ShoppingContext)
    const [open, setOpen, _, node] = useDropdown()
    
    const getDisplayData = () => {

        if (searchParamActive){
            return searchInput
        }
        if (selectedCategory){
            return selectedCategory.name
        }
        return ''
    }

  return (
    <FormTemplate
        node={node}
        open={open}
        openFunc={setOpen}
        selectedData={getDisplayData()}
        dropdown={ 
            <WhatDropdown
                open={open}
                setOpen={setOpen}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSearchParamActive={setSearchParamActive}
            />}
        placeholder={'What'}
        icon={BeachAccessIcon}
    />
  ) 
}

export default What