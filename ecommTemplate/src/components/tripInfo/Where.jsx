import { useContext, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { ShoppingContext } from "../../context";
import useClickOutside from "../../hooks/useClickOutside";
import FormTemplate from "./FormTemplate";

const Where = () => {

    const {setSelectedDestination, selectedDestination, allDests} = useContext(ShoppingContext)
    const [openDest, setOpenDest] = useState(false)
 
    const dropdown = () => (
        <div className={`absolute bg-white flex flex-col flex-1 w-full top-16 right-0 mt-1 mr-1 rounded-md p-2 transition-all ease-in-out duration-150 ${openDest ? '' : 'hidden'} shadow-md z-10`}>
            <h1 className='w-full text-center text-tertiary font-bold text-[22px] py-2'>
                Locations
            </h1>
            <div className='grid grid-cols-4 text-tertiary'>
                {allDests?.map((dest, i) => (
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

    const handleSelect = (city) => {
        setSelectedDestination(city);
        setOpenDest(false)
    }

    const node = useClickOutside(() => {
        setOpenDest(false)
    })
    const destText = selectedDestination === '' ? '' : selectedDestination

  return (
    <div className="w-full">
        <FormTemplate
            node={node}
            openFunc={setOpenDest}
            selectedData={destText}
            dropdown={dropdown}
            placeholder={'Where to'}
            icon={LocationOnIcon}
        />
    </div>
  )
}

export default Where