import { useState } from 'react';
import { DateRange } from 'react-date-range';
import useClickOutside from '../hooks/useClickOutside';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'https://esm.run/date-fns'

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Searchbar = (props) => {

    console.log(props)
    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        props.setSelectedDateRage(selection)
    }

    function handleSearch(){
        console.log(props.selectedDateRange.first)
        console.log(props.selectedDateRange)
    }

    const [openDest, setOpenDest] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false);

    let destNode = useClickOutside(() => {
        setOpenDest(false);
    })

    let calNode = useClickOutside(() => {
        setOpenCalendar(false);
    })

   
  return (
    
        <div 
        className='flex-1 flex flex-col sm:flex-row items-center justify-center'
        >
            <div className='relative flex flex-1 flex-col' ref={destNode}>
                <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center flex-1">
                    <LocationOnIcon className={`w-8 h-8 absolute scale-125 ml-2 transform ${props.selectedDestination == '' ? 'text-tertiaryTone-300' : 'text-tertiary'}`}
                    onClick={(openDest)=>{setOpenDest(!openDest);}}
                    />
                    <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 min-h-[40px] overflow-hidden truncate focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 ${props.selectedDestination == '' ? 'text-tertiaryTone-300': 'text-tertiary'} pl-10 p-2 border border-primary`} 
                    onClick={()=> setOpenDest((openDest) => !openDest)}
                    >
                        {props.selectedDestination == '' ? 'Where to' : props.selectedDestination}
                    </div>
                    
                </label>
                <div className={`absolute bg-white flex flex-1 w-full top-[40px] mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'}`}>
                    <ul>
                        {props.dests?.map((value, i) => (
                        <li 
                        className='text-tertiary'
                        onClick={() => {
                            props.setSelectedDestination(value.text); setOpenDest(false);
                        }}
                        key={i}
                        >
                            {value.text}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div ref={calNode}>
                <label className={`cursor-pointer relative flex items-center justify-start`}>
                    <CalendarMonthIcon className={`w-8 h-8 absolute transform scale-125 ml-2 ${props.selectedDateRange.first ? 'text-tertiary' : 'text-tertiaryTone-300'}`}/>
                    <div className={`bg-white cursor-pointer rounded-md mr-1 min-w-[240px] min-h-[40px] placeholder-tertiaryTone-200 pl-12 p-2] ${props.selectedDateRange.first ? 'text-tertiary' : 'text-tertiaryTone-300'} text-start flex items-center border border-primary`}
                    onClick={()=>setOpenCalendar(!openCalendar)}
                    >
                        {props.selectedDateRange.first ? format(props.selectedDateRange.startDate, 'MMM, d').concat(' - ', format(props.selectedDateRange.endDate, 'MMM d yyyy')) : 'When' }
                    </div>
                </label>
                <DateRange
                    ranges={[props.selectedDateRange]}
                    showMonthAndYearPickers={false}
                    onChange={handleDateSelection}
                    minDate={new Date()}
                    direction='horizontal'
                    startDatePlaceholder='Beginning'
                    endDatePlaceholder='Finale'
                    className={`${openCalendar ? '' : 'hidden'} rounded-md flex absolute top-16 z-10 border shadow-md`}
                    
                />
            </div>
            
            <button 
            className='rounded-md bg-primary p-2 min-h-[40px] min-w-[40px] text-white'
            onClick={handleSearch}
            
            >
                <SearchIcon className='scale-125'/>
            </button>
        </div>
  )
}

export default Searchbar