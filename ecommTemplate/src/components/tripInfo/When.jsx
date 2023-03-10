import { useContext, useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'https://esm.run/date-fns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";

const When = () => {

    const {setSelectedDateRange, selectedDateRange,} = useContext(ShoppingContext)
    const [open, setOpen, handleClick, node] = useDropdown()

    const handleRangeChange = (focusedRange) => {
        if (focusedRange[1] == 0) {
            setOpen(false)
        }
    }

    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        setSelectedDateRange(selection)
    }

    const dropdown = () => (
        <DateRange
            ranges={[selectedDateRange]}
            showMonthAndYearPickers={false}
            onChange={handleDateSelection}
            minDate={new Date()}
            direction='horizontal'
            startDatePlaceholder='Beginning'
            endDatePlaceholder='Finale'
            className={`${open ? '' : 'hidden'} rounded-md flex absolute top-16 z-10 border  shadow-md`}
            onRangeFocusChange={handleRangeChange}
        />
    )

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpen}
            selectedData={dateText}
            dropdown={dropdown}
            placeholder={'When'}
            icon={CalendarMonthIcon}
        />
    </div>
  )
}

export default When