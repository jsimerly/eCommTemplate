import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useState} from 'react';

import ScaleBar from '../../utils/ScaleBar';

const PriceComp = ({priceFilter, setPriceFilter, priceExtrema}) => {
    const [open, setOpen] = useState(true)

    const convertToDecimal = (input) => {
        if (input===''){
            return 0
        }
        const newValue = Number.parseFloat(input.replace(/[^0-9]/g, ""));
        return newValue;
    }

    const handleInputChangeMin = (e) => {
        let newValue = convertToDecimal(e.target.value)
        let newPriceFilter = [...priceFilter]

        if (newValue < priceExtrema[0]){
            newPriceFilter[0] = null 
        } else if (newValue <= priceFilter[1]){
            newPriceFilter[0] = newValue
        } else {
            newPriceFilter = [newValue, newValue]
        }
        setPriceFilter(newPriceFilter)
    }

    const handleInputChangeMax = (e) => {
        let newValue = convertToDecimal(e.target.value)
        let newPriceFilter = [...priceFilter]

        if (newValue < priceExtrema[1]){
            newPriceFilter[1] = null
        } else if (newValue >= priceFilter[0]){
            newPriceFilter[1] = newValue
        } else {
            newPriceFilter = [newValue, newValue]
        }
        setPriceFilter(newPriceFilter)
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
                />
                <div className='flex flex-row justify-center items-center'>
                    <div className='w-1/3 relative'>
                        <input
                            value={priceFilter[0] === null ? '' : priceFilter[0]}
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
                            value={priceFilter[1] === null ? '' : priceFilter[1]}
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