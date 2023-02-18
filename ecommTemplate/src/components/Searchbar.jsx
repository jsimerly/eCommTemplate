import { useState } from 'react';
import { DateRange } from 'react-date-range';
import useClickOutside from '../hooks/useClickOutside';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'https://esm.run/date-fns'

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BarTemplate = ({node, openFunc, selectedData, icon: IconComponent, placeholder, dropdown}) => {

    return (
        <div className='relative flex flex-1 flex-col h-full' ref={node}>
        <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center flex-1">
            <IconComponent className={`w-8 h-8 absolute scale-125 ml-2 transform ${selectedData == '' ? 'text-tertiaryTone-300' : 'text-tertiary'}`}
            onClick={(openBool)=>{openFunc(!openBool);}}
            />
            <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 overflow-hidden truncate focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 pl-10 px-4 h-full items-center flex ${selectedData == '' ? 'text-tertiaryTone-300': 'text-tertiary'}  border border-primary`} 
            onClick={()=> openFunc((openBool) => !openBool)}
            >
                {selectedData == '' ? placeholder : selectedData}
            </div>
        </label>
        {dropdown()}
    </div>
    )
}

const DestBar = ({destNode, openDest, setOpenDest, dests, selectedDestination, setSelectedDestination}) => {
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-1 w-full top-[40px] mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'}`}>
            <ul>
                {dests?.map((value, i) => (
                <li 
                className='text-tertiary'
                onClick={() => {
                    setSelectedDestination(value.text); setOpenDest(false);
                }}
                key={i}
                >
                    {value.text}
                </li>
                ))}
            </ul>
        </div>
    )

    const destText = selectedDestination == '' ? '' : selectedDestination

    return (
        <BarTemplate
            node={destNode}
            openFunc={setOpenDest}
            selectedData={destText}
            dropdown={dropdown}
            placeholder={'Where to'}
            icon={LocationOnIcon}
        />
    )
}
 


const CalendarBar2 = ({calNode, selectedDateRange, openCalendar, setOpenCalendar, handleDateSelection}) => {

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
        />
    )

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

    console.log(dateText)

    return(    
    <BarTemplate
        node={calNode}
        openFunc={setOpenCalendar}
        selectedData={dateText}
        placeholder={'When'}
        dropdown={dropdown}
        icon={CalendarMonthIcon}
    />
    )
}


const CategoriesBar = () => (
    <div className='flex flex-1 border border-primary px-2 py-4 rounded-md mr-1'>
        Jacob
    </div>
)

const Searchbar = (props) => {

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
    <div className='p-10 bg-white rounded-md'>


        <div 
        className='flex-1 flex flex-col sm:flex-row items-center justify-center'
        >
            <div className='w-1/2 h-[60px]'>
                <DestBar
                    destNode={destNode}
                    openDest={openDest}
                    setOpenDest={setOpenDest}
                    dests={props.dests}
                    selectedDestination={props.selectedDestination}
                    setSelectedDestination={props.setSelectedDestination}
                />
            </div>
            <div className='w-1/4 h-[60px] border'>
                <CalendarBar2
                    calNode={calNode}
                    selectedDateRange={props.selectedDateRange}
                    openCalendar={openCalendar}
                    setOpenCalendar={setOpenCalendar}
                    handleDateSelection={handleDateSelection}
                />
            </div>
            <div className='w-1/4'>
                <CategoriesBar/>
            </div>
            <div className='flex justify-center itmes-center'>
                <button 
                    className='rounded-md bg-primary text-white flex flex-1 justify-center items-center p-4'
                    onClick={handleSearch}
                >
                    <SearchIcon className='scale-125'/>
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Searchbar