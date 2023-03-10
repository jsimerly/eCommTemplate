import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export const QuantInput = ({quant, setQuant, className, buttonSize}) => {
    const [selected, setSelected] = useState(false)


    const validateQuant = (quant) => {
        if (quant >= 0){
            setQuant(quant)
        }
    }

    const handleClickUp = () => {
        validateQuant(quant+1)
    }

    const handleClickDown = () => {
        validateQuant(quant-1)
    }


    const handleChange = (e) => {
        validateQuant(e.target.value)
    }

    const handleInputFocus = () => {
        setSelected(true)
    }

    const handleInputBlur = () => {
        setSelected(false)
    }


    return(
        <div className={`${selected ? 'outline outline-1 outline-primary' : null  }  w-full h-full flex justify-center items-center bg-white rounded-md border border-primary relative text-[24px]`}>
        <div className='flex flex-row justify-center items-center w-full'>
          <input 
            className={`${className} w-full text-end p-2 text-[24px] outline-none `} 
            value={quant} 
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            />
          <div className={`${className} flex flex-col p-2`}>
            <AddIcon 
                sx={{fontSize: buttonSize}}
                className='cursor-pointer hover:scale-110'
                onClick={handleClickUp}
            />
            <RemoveIcon 
                sx={{fontSize: buttonSize}}
                className='cursor-pointer hover:scale-110'
                onClick={handleClickDown}
            />
          </div>
        </div>
      </div>
    )
}