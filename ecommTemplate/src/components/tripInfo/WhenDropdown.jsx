import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useEffect, useState, useContext } from "react";
import { ShoppingContext } from "../../context";

const WhenDropdown = ({setOpen}) => {
    const {setSelectedDateRange, selectedDateRange,} = useContext(ShoppingContext)
    const [dateRangeHolder, setDateRangeHolder] = useState(selectedDateRange)
    const [focusedRangeHolder, setFocusedRange] = useState([0,1])

    const handleRangeChange = (focusedRange) => {
        setFocusedRange(focusedRange)

    }

    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        setDateRangeHolder(selection)
    }

    useEffect(()=>{
        if (focusedRangeHolder[1] == 0){
            setSelectedDateRange(dateRangeHolder)
            setOpen(false)
        }
    },[dateRangeHolder])
    
  return (
    <div 
    className={`sm:absolute z-10 top-16 sm:border-none border border-primary rounded-md shadow-md`}
    style={{height: '80hv'}}>
    <DateRange
        ranges={[dateRangeHolder]}
        showMonthAndYearPickers={false}
        onChange={handleDateSelection}
        minDate={new Date()}
        direction='horizontal'
        startDatePlaceholder='Beginning'
        endDatePlaceholder='Finale'
        className={`rounded-md shadow-md flex`}
        onRangeFocusChange={handleRangeChange}
    />
</div>
  )
}

export default WhenDropdown