import { useContext, useEffect, useState } from "react";
import { format } from 'date-fns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ShoppingContext } from "../../context";
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";
import WhenDropdown from "./WhenDropdown";

const When = () => {

    const {selectedDateRange,} = useContext(ShoppingContext)
    const [open, setOpen, _, node] = useDropdown()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleWindowResize)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    },[])

    const dateFormat_1 = windowWidth <= 1040 ? 'MM/dd' : 'MMM d'
    const dateFormat_2 = windowWidth <= 1040 ? 'MM/dd' : 'MMM d yyy'

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, dateFormat_1).concat(' - ', format(selectedDateRange.endDate, dateFormat_2)) : ''

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