import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState, useEffect} from 'react';

import ScaleBar from '../../utils/ScaleBar';

const PriceComp = ({priceFilter, setPriceFilter, priceExtrema}) => {
    const [open, setOpen] = useState(true)
    const [displayMin, setDisplayMin] = useState(null)
    const [displayMax, setDisplayMax] = useState(null)

    const setValidFilters = () => {
        const newPriceFilter = [...priceFilter]
        const newMin = displayMin ? parseFloat(displayMin) : null;
        const newMax = displayMax ? parseFloat(displayMax) : null;

        if (newMin < priceExtrema[0] || newMin > priceExtrema[1] || newMin === null){
            newPriceFilter[0] = null
        } else {
            newPriceFilter[0] = newMin;
        }

        if (newMax > priceExtrema[1] || newMax < priceExtrema[0] || newMax=== null){
            newPriceFilter[1] = null
        } else {
            newPriceFilter[1] = newMax
        }

        if (newMin > newMax){
            newPriceFilter[1] = newMin        
        }
        
        if (newPriceFilter[0]){
            setDisplayMin(newPriceFilter[0].toFixed(2))
        } else {
            setDisplayMin(null)
        }
        if (newPriceFilter[1]){
            setDisplayMax(newPriceFilter[1].toFixed(2))
        } else {
            setDisplayMax(null)
        }
        setPriceFilter(newPriceFilter)
    }

    useEffect(()=>{
        let timer = setTimeout(() => setValidFilters(), 1500)
        return ()=> {
            clearTimeout(timer)
        }
    }, [ displayMin ,displayMax, priceExtrema])

    const money_regex = /^[0-9]\d*(?:\.\d{0,2})?$/;
    const handleInputChangeMin = (e) => {
        const value = e.target.value
        if (value === '' || money_regex.test(value)){
            setDisplayMin(value)    

        }
    }

    const handleInputChangeMax = (e) => {
        const value = e.target.value
        if (value === '' || money_regex.test(value)){
            setDisplayMax(value)
        }
    }


    return (
        <div>
            <div 
                className='flex flex-row justify-between items-center hover:underline cursor-pointer'
                onClick={()=> setOpen((open) => !open)}
            >
                <h3 className='text-[24px]'>
                    Price
                </h3>
                { open ? 
                    <ExpandMoreIcon/>
                    :
                    <ExpandLessIcon/>
                }
            </div>
            <div className={`${open? null : 'hidden'} py-3`}>
                <ScaleBar 
                    values={priceFilter}
                    setValues={setPriceFilter}
                    priceExtrema={priceExtrema}
                    setDisplayMin={setDisplayMin}
                    setDisplayMax={setDisplayMax}
                />
                <div className='flex flex-row justify-center items-center'>
                    <div className='w-1/3 relative'>
                        <input
                            value={displayMin === null ? '' : displayMin}
                            onChange={(e)=> handleInputChangeMin(e)}
                            className='p-2 outline-primary border border-primary rounded-md text-center w-full'
                            placeholder='Min'
                        />
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>$</span>
                    </div>
                    <span className='mx-4'>
                        -
                    </span>
                    <div className='w-1/3 relative'>
                        <input
                            value={displayMax === null ? '' : displayMax}
                            onChange={(e)=> handleInputChangeMax(e)}
                            className='p-2 outline-primary border border-primary rounded-md text-center relative w-full'
                            placeholder='Max'
                        />
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>$</span>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default PriceComp