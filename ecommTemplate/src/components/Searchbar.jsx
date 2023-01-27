import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const Searchbar = () => {

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [destination, setDestination] = useState();
    const [openDest, setOpenDest] = useState(false)

    const StartDateInput = forwardRef(({ value, onClick }, ref) => (
        <label className={`cursor-pointer relative ${value == '' ? 'text-tertiaryTone-300' : 'text-tertiary'} flex items-center`}>
                <svg 
                className="point-events-none w-8 h-8 absolute transform"
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
                </svg>
        <div className={`bg-white cursor-pointer rounded-md mr-1 min-w-[140px] min-h-[40px] shadow focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 ${value == "" ? 'text-tertiaryTone-300': 'text-tertiary'} pl-10 p-2`} onClick={onClick} ref={ref} >
            {ref}
            {value == '' ? 'From' : value}
        </div>
        </label>
    ));

    const EndDateInput = forwardRef(({ value, onClick }, ref) => (
        <label className={`cursor-pointer relative ${value == '' ? 'text-tertiaryTone-300' : 'text-tertiary'} flex items-center`}>
            <svg 
            className="point-events-none w-8 h-8 absolute transform"
            fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
            </svg>
            <div className={`bg-white cursor-pointer rounded-md mr-1 min-w-[140px] min-h-[40px] shadow focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 ${value == "" ? 'text-tertiaryTone-300': 'text-tertiary'} pl-10 p-2`} onClick={onClick} ref={ref} >
                {ref}
                {value == '' ? 'to' : value}
            </div>
        </label>
    ));
   
  return (
    <div className='flex-1 justify-start items-center max-w-3xl'>
        <div 
        className='flex-1 sm:flex'
        >
            <div className='relative flex flex-1 flex-col'>
                <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center flex-1">
                    <svg 
                    onClick={(openDest)=>{setOpenDest(!openDest)}}
                    className={`w-8 h-8 absolute transform ${destination == null ? 'text-tertiaryTone-300' : 'text-tertiary'}`}
                    fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                    <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 min-h-[40px] shadow focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 ${destination == null ? 'text-tertiaryTone-300': 'text-tertiary'} pl-10 p-2`} 
                    onClick={()=> setOpenDest((openDest) => !openDest)}
                    >
                        {destination == null ? 'Where to' : destination}
                    </div>
                    
                </label>
                <div className={`absolute bg-white flex flex-1 w-full top-[40px] mt-1 mr-1 rounded-md shadow p-2 transition-all ease-in-out duration-150 ${openDest ? 'opacity-100' : 'opacity-0'}`}>
                    <ul>
                        <li>Virgina Beach, VA</li>
                        <li>Myrtle Beach, SC</li>
                        <li>St. Augustine, FL</li>
                        <li>Daytona Beach, FL</li>
                        <li>Outer Banks, NC</li>
                        <li>Hilton Head Island, SC</li>
                    </ul>
                </div>
            </div>
            
            <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center">
                <svg 
                className="point-events-none w-8 h-8 absolute transform"
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
                </svg>
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<StartDateInput/>}
                />
            </label>
            
            
            <label className="cursor-pointer relative text-tertiaryTone-200 focus-within:text-tertiary flex items-center">
                <svg 
                className="point-events-none w-8 h-8 absolute transform"
                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
                </svg>
                <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                customInput={<EndDateInput/>}
                />
                
            </label>
            
            <button className='rounded-md bg-secondary p-2 min-h-[40px] min-w-[40px] text-tertiary'>
                <svg 
                fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Searchbar