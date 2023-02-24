import { useState, useContext, useEffect } from 'react';
import { DateRange } from 'react-date-range';

import useClickOutside from '../hooks/useClickOutside';
import { SearchContext, ShoppingContext, } from '../context';
import navigateShopping from '../hooks/navigateShopping';

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

    let handleSelect = (city) => {
        setSelectedDestination(city);
        setOpenDest(false);
    }


    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Locations
            </h1>
            <div className='grid grid-cols-4 text-tertiary'>
                {dests?.map((dest, i) => (
                    <div key={i}>
                        <h3 className='font-bold text-[18px] p-2'>
                            {dest.state}
                        </h3>
                        <ul>
                            {dest.cities?.map((city, i) => (
                                <li
                                    key={i}
                                    className='hover:underline pl-4 cursor-pointer'
                                    onClick={() => handleSelect(city.city)}
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

    const handleRangeChange = (focusedRange) => {
        if (focusedRange[1] == 0) {
            setOpenCalendar(false)
        }
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
            className={`${openCalendar ? '' : 'hidden'} rounded-md flex absolute top-16 z-10 border  shadow-md`}
            onRangeFocusChange={handleRangeChange}
        />
    )

    const dateText = selectedDateRange?.first ? format(selectedDateRange.startDate, 'MMM, d').concat(' - ', format(selectedDateRange.endDate, 'MMM d yyyy')) : ''

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


const CategoriesBar = ({catNode, selectedCategory, openCat, setOpenCat, setSelectedCategory, categories,}) => {

    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setOpenCat(false);
    }

    //Need to add search to this and location
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openCat ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Categories
            </h1>
            <div className='grid grid-cols-5 text-tertiary'>
                {categories?.map((cat, i) => (
                    <div key={i} className='last:hidden'>
                        <h3 
                            className='font-bold text-[18px] px-2 cursor-pointer hover:underline'
                            onClick={()=> {handleSelect(cat)}}
                        >
                            {cat.name}
                        </h3>
                        <ul>
                            {cat.sub?.map((subCat, i) => (
                                <li 
                                    key={i}
                                    className='pl-4 cursor-pointer hover:underline truncate'
                                    onClick={()=> handleSelect(subCat)}
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
                        link: '',
                        type:'full',
                        id:'0000'
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
const Searchbar = ({immediateSearch}) => {

    const {selectedDateRange, setSelectedDateRage, 
        selectedDestination, setSelectedDestination,
        selectedCategory, setSelectedCategory,
        allDests, allCategories
    } = useContext(ShoppingContext)
    const [mounted, setMounted] = useState(false)
    const useNavShopping = navigateShopping()

    useEffect(() => {
        if (mounted) {
            if(immediateSearch){
                useNavShopping()
            }
        } else {

            setMounted(true)
        }
    }, [selectedDestination, selectedCategory, selectedDateRange])

    function handleDateSelection(ranges){
        const { selection } = ranges;
        selection.first = true;
        setSelectedDateRage(selection)
    }

    let handleSearch = navigateShopping()

    const [openDest, setOpenDest] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openCat, setOpenCat] = useState(false)

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
                    dests={allDests}
                    selectedDestination={selectedDestination}
                    setSelectedDestination={setSelectedDestination}
                />
            </div>
            <div className='w-1/4 h-[40px]'>
                <CalendarBar
                    calNode={calNode}
                    selectedDateRange={selectedDateRange}
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
                    categories={allCategories}               
                />
            </div>
            {immediateSearch ? 
                null
                :
                <div className='flex justify-center itmes-center'>
                    <button 
                        className='rounded-md bg-primary text-white flex flex-1 justify-center items-center h-[40px] w-[40px]'
                        onClick={handleSearch}
                    >
                        <SearchIcon className='scale-125 hover:scale-150'/>
                    </button>
                </div>
            }

        </div>
  )
}

export default Searchbar