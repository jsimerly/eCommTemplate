import { useContext, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";

const Where = () => {

    const {setSelectedDestination, selectedDestination, allDests} = useContext(ShoppingContext)
    const [openDest, setOpenDest] = useState(false)
 
    const dropdown = () => (
        <div className={`${openDest ? '' : 'hidden'}`}>
            DROPDOWN
        </div>
    )

    const handleSelect = (city) => {
        setSelectedDestination(city);
        setOpenDest(false)
    }

    const node = useClickOutside(() => {
        setOpenDest(false)
    })
    const destText = selectedDestination === '' ? '' : selectedDestination

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpenDest}
            selectedData={destText}
            dropdown={dropdown}
            placeholder={'Where to'}
            icon={LocationOnIcon}
        />
    </div>
  )
}

export default Where