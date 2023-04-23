import { useContext, useState } from "react";
import { ShoppingContext } from "../../context";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import FormTemplate from "./FormTemplate";
import useDropdown from "../../hooks/useDropdown";

const Where = () => {

    const {setSelectedDestination, selectedDestination, allDests} = useContext(ShoppingContext)
    const [open, setOpen, handleClick, node] = useDropdown()
 
    const dropdown = () => (
        <div 
            className={`sm:absolute bg-white flex w-full flex-col top-20 right-0 mx-4 rounded-md p-2 ${open ? '' : 'hidden'} shadow-md z-20 border border-primary sm:border-none overflow-y-auto `}
            style={{ maxHeight: `80vh` }}
        >
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Locations
            </h1>
            <div className='flex flex-col sm:flex-row flex-wrap justify-between text-tertiary px-3'>
                {allDests?.map((dest, i) => {
                    const [open, setOpen] = useState(true)

                    return (
                        <div key={i}>
                            <div className="flex flex-row justify-between">
                                <h3 className='font-bold text-[18px] p-2'>
                                    {dest.state}
                                </h3>
                                {open ?
                                    <button
                                        key={'button_less_'+i} 
                                        className="sm:hidden"
                                        onClick={() => setOpen(false)}
                                    >
                                        <ExpandLessIcon/>
                                    </button>
                                    :
                                    <button 
                                        key={'button_more_'+i} 
                                        className="sm:hidden"
                                        onClick={() => setOpen(true)}
                                    >
                                        <ExpandMoreIcon/>
                                    </button>
                                }
                            </div>
                            <ul className={`${open ? null : 'hidden'}`}>
                                {dest.cities?.map((city, i) => (
                                    <li
                                        key={i}
                                        className='hover:underline pl-4 cursor-pointer'
                                        onClick={() => handleSelect(city)}
                                    >
                                        {city.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )

    const handleSelect = (city) => {
        setSelectedDestination(city);
        setOpen(false)
    }

    const destText = selectedDestination ? selectedDestination.city : ''

  return (
    <FormTemplate
        node={node}
        openFunc={setOpen}
        selectedData={destText}
        dropdown={dropdown}
        placeholder={'Where to'}
        icon={LocationOnIcon}
    />
  )
}

export default Where