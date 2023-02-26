import { useContext, useState } from "react";
import { DateRange } from 'react-date-range';
import { format } from 'https://esm.run/date-fns'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";

const When = () => {

    const {setSelectedDateRange, selectedDateRange,} = useContext(ShoppingContext)
    const [openCalendar, setOpenCalendar] = useState(false)

    const handleRangeChange = (focusedRange) => {
        if (focusedRange[1] == 0) {
            setOpenCalendar(false)
        }
    }

    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        setSelectedDateRange(selection)
    }

    const node = useClickOutside(() => {
        setOpenCalendar(false)
    })

    const dropdown = () => (
        <DateRange
            ranges={[selectedDateRange]}
            showMonthAndYearPickers={false}
            onChange={handleDateSelection}
            minDate={new Date()}
            direction='horizontal'
            startDatePlaceholder='Beginning'
            endDatePlaceholder='Finale'
            className={`${openCalendar ? '' : 'hidden'} rounded-md flex absolute top-16 z-10 border  shadow-md`}
            onRangeFocusChange={handleRangeChange}
        />
    )

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpenCalendar}
            selectedData={dateText}
            dropdown={dropdown}
            placeholder={'When'}
            icon={CalendarMonthIcon}
        />
    </div>
  )
}

export default When