import { useContext, useState } from "react";
import { ShoppingContext } from "../../context";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";

import WhereDropdown from "./WhereDropdown";

const Where = () => {
    const { selectedDestination } = useContext(ShoppingContext)
    const [open, setOpen, _, node] = useDropdown()

    const destText = selectedDestination ? selectedDestination.city : ''

  return (
    <FormTemplate
        node={node}
        open={open}
        openFunc={setOpen}
        selectedData={destText}
        dropdown={<WhereDropdown setOpen={setOpen}/>}
        placeholder={'Where to'}
        icon={LocationOnIcon}
    />
  )
}

export default Where