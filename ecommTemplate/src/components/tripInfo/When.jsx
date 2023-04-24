import { useContext } from "react";
import { format } from 'date-fns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ShoppingContext } from "../../context";
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";
import WhenDropdown from "./WhenDropdown";

const When = () => {

    const {selectedDateRange,} = useContext(ShoppingContext)
    const [open, setOpen, _, node] = useDropdown()

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

  return (
    <FormTemplate
        node={node}
        open={open}
        openFunc={setOpen}
        selectedData={dateText}
        dropdown={<WhenDropdown setOpen={setOpen}/>}
        placeholder={'When'}
        icon={CalendarMonthIcon}
    />
  )
}

export default When