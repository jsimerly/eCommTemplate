import { useState } from 'react';
import { DateRange } from 'react-date-range';
import useClickOutside from '../hooks/useClickOutside';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'https://esm.run/date-fns'

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const BarTemplate = ({node, openFunc, selectedData, icon: IconComponent, placeholder, dropdown}) => {

    return (
        <div className='flex flex-1 flex-col h-full' ref={node}>
        <label className="cursor-pointer text-tertiaryTone-200 focus-within:text-tertiary flex items-center flex-1">
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
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Locations
            </h1>
            <div className='grid grid-cols-4 text-tertiary'>
                {dests?.map((dest, i) => (
                    <div>
                        <h3 className='font-bold text-[18px] p-2'>
                            {dest.state}
                        </h3>
                        <ul>
                            {dest.cities?.map((city, i) => (
                                <li
                                    className='hover:underline pl-4 cursor-pointer'
                                    onClick={()=> {setSelectedDestination(city.city); setOpenDest(false)}}
                                >
                                    {city.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
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
 


const CalendarBar = ({calNode, selectedDateRange, openCalendar, setOpenCalendar, handleDateSelection}) => {

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


const CategoriesBar = ({catNode, selectedCategory, openCat, setOpenCat, setSelectedCategory, categories}) => {
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openCat ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Categories
            </h1>
            <div className='grid grid-cols-4 text-tertiary'>
                {categories?.map((cat, i) => (
                    <div>
                        <h3 
                            className='font-bold text-[18px] p-2 cursor-pointer hover:underline'
                            onClick={()=> {
                                setSelectedCategory(cat); setOpenCat(false)
                            }}
                        >
                            {cat.name}
                        </h3>
                        <ul>
                            {cat.sub?.map((subCat, i) => (
                                <li 
                                    className='pl-4 cursor-pointer hover:underline'
                                    onClick={()=> {
                                        setSelectedCategory(subCat); setOpenCat(false)
                                    }}
                                >
                                    {subCat.name}
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <h4 
                className='w-full text-center underline text-tertiary cursor-pointer hover:scale-105 mt-2'
                onClick={()=> {
                    setSelectedCategory({
                        name: 'All Categories',
                        link: ''
                    });
                    setOpenCat(false)
                }}
            >
                All Categories
            </h4>
        </div>
    )

    return (
        <BarTemplate
            node={catNode}
            openFunc={setOpenCat}
            selectedData={selectedCategory}
            placeholder={'What'}
            dropdown={dropdown}
            icon={BeachAccessIcon}
        />
    )
}
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
    const [openCat, setOpenCat] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(
        {
            name: '',
            link: '',
        }
    )

    let destNode = useClickOutside(() => {
        setOpenDest(false);
    })

    let calNode = useClickOutside(() => {
        setOpenCalendar(false);
    })

    let catNode = useClickOutside(() => {
        setOpenCat(false);
    })

   
  return (
        <div 
        className='flex-1 flex flex-col sm:flex-row items-center justify-center relative'
        >
            <div className='w-1/4 h-[40px]'>
                <DestBar
                    destNode={destNode}
                    openDest={openDest}
                    setOpenDest={setOpenDest}
                    dests={props.dests}
                    selectedDestination={props.selectedDestination}
                    setSelectedDestination={props.setSelectedDestination}
                />
            </div>
            <div className='w-1/4 h-[40px]'>
                <CalendarBar
                    calNode={calNode}
                    selectedDateRange={props.selectedDateRange}
                    openCalendar={openCalendar}
                    setOpenCalendar={setOpenCalendar}
                    handleDateSelection={handleDateSelection}
                />
            </div>
            <div className='w-1/4 h-[40px]'>
                <CategoriesBar
                    catNode={catNode}
                    selectedCategory={selectedCategory.name}
                    openCat={openCat}
                    setOpenCat={setOpenCat}
                    setSelectedCategory={setSelectedCategory}
                    categories={props.allCategories}               
                />
            </div>
            <div className='flex justify-center itmes-center'>
                <button 
                    className='rounded-md bg-primary text-white flex flex-1 justify-center items-center h-[40px] w-[40px]'
                    onClick={handleSearch}
                >
                    <SearchIcon className='scale-125'/>
                </button>
            </div>
        </div>
  )
}

export default Searchbar