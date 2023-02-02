import { useState, forwardRef, useRef } from 'react';
import DatePicker from 'react-datepicker'
import {DateRange} from 'react-date-range';
import useClickOutside from '../hooks/useClickOutside';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const dests = [
    {city:'Virgina Beach, VA', text:'Virgina Beach, VA'},
    {city:'Myrtle Beach, SC', text:'Myrtle Beach, SC'},
    {city:'St. Augustine, FL', text:'St. Augustine, FL'},
    {city:'Daytona Beach, FL', text:'Daytona Beach, FL'},
    {city:'Outer Banks, NC', text:'Outer Banks, NC'},
    {city:'Hilton Head Island, SC', text:'Hilton Head Island, SC'},
]

var today = new Date()

const Searchbar = () => {

    const [selectRange, setSelectRange ]= useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )

    function handleDateSelection(ranges){
        const { selection } = ranges;
        setSelectRange(selection)
    }

    function handleSearch(){
        console.log(selectRange)
    }

    const [destination, setDestination] = useState();
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
        className='flex-1 flex flex-col sm:flex-row font-poppins'
        >
            <div className='relative flex flex-1 flex-col' ref={destNode}>
                <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center flex-1">
                    <LocationOnIcon className={`w-8 h-8 absolute scale-125 ml-2 transform ${destination == null ? 'text-tertiaryTone-300' : 'text-tertiary'}`}
                    onClick={(openDest)=>{setOpenDest(!openDest)}}
                    />
                    <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 min-h-[40px] overflow-hidden truncate shadow focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 ${destination == null ? 'text-tertiaryTone-300': 'text-tertiary'} pl-10 p-2`} 
                    onClick={()=> setOpenDest((openDest) => !openDest)}
                    >
                        {destination == null ? 'Where to' : destination}
                    </div>
                    
                </label>
                <div className={`absolute bg-white flex flex-1 w-full top-[40px] mt-1 mr-1 rounded-md shadow p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'}`}>
                    <ul>
                        {dests.map((value, i) => (
                        <li 
                        className='text-tertiary'
                        onClick={() => {
                            setDestination(value.text); setOpenDest(false)
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
                    <CalendarMonthIcon className={`w-8 h-8 absolute transform scale-125 ml-2 ${false ? 'text-tertiary' : 'text-tertiaryTone-300'}`}/>
                    <div className={`bg-white cursor-pointer rounded-md mr-1 min-w-[240px] min-h-[40px] shadow focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 pl-12 p-2] ${false ? 'text-tertiary' : 'text-tertiaryTone-300'} text-start flex items-center`}
                    onClick={()=>setOpenCalendar(!openCalendar)}
                    >
                        When
                    </div>
                </label>
                <DateRange
                    ranges={[selectRange]}
                    onChange={handleDateSelection}
                    minDate={today}
                    direction='horizontal'
                    className={`${openCalendar ? '' : 'hidden'} rounded-md flex absolute top-16 z-10 border shadow-md`}
                    
                />
            </div>
            
            <button 
            className='rounded-md bg-primaryLight p-2 min-h-[40px] min-w-[40px] text-tertiary'
            onClick={handleSearch}
            
            >
                <SearchIcon className='scale-125'/>
            </button>
        </div>
  )
}

export default Searchbar