import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';


import { useEffect, useState } from 'react';
import ScaleBar from '../utils/ScaleBar';


const RatingComp = ({minStar, maxStar, setMinStar, setMaxStar}) => {
    const [open, setOpen] = useState(true)
    const [hovering, setHovering] = useState(null)
    const [hoveringDisabled, setHoveringDisabled] = useState(false)
    const [selection_1, setSelection_1] = useState(null)
    const stars = Array(5).fill(null) //static array

    const handleClick = (index) => {
        if (selection_1 === null){
            setSelection_1(index+1)
        } else {
            setHoveringDisabled(true)
            if (selection_1 <= index){
                setMinStar(selection_1)
                setMaxStar(index+1)
            } else {
                setMinStar(index+1)
                setMaxStar(selection_1)
            }
            setSelection_1(null)
            setHovering(null)
        }
    }

    const handleMouseEnter = (index) => {
        if (!hoveringDisabled){
            setHovering(index+1)
        }
    }

    const handleLeaveFully = () => {
        setHoveringDisabled(false)
        setHovering(null)
    }

    const FilledStar = ({i}) => (
        <StarIcon 
            key={'star_icon_filter_'+i} 
            sx={{ fontSize: 30 }}
            onMouseEnter={()=> handleMouseEnter(i)}
        />
    )

    const FilledHoverStar = ({i}) => (
        <StarIcon 
            className='cursor-pointer hover:scale-110'
            key={'star_icon_hover_filter'+i} 
            sx={{ fontSize: 30 }}
            onClick={()=>handleClick(i)}
            onMouseEnter={()=> handleMouseEnter(i)}
        />
    )

    const EmptyStar = ({i}) => (
        <StarOutlineIcon 
            key={'star_icon_blank_filter'+i} 
            sx={{ fontSize: 30 }} 
            onMouseEnter={()=> handleMouseEnter(i)}
        />
    )

    return (
        <div>
            <div 
                className='flex flex-row justify-between items-center hover:underline cursor-pointer'
                onClick={()=> setOpen((open) => !open)}
            >
                <h3 className='text-[24px]'>
                    Rating
                </h3>
                { open ? 
                    <ExpandMoreIcon/>
                    :
                    <ExpandLessIcon/>
                }
            </div>
            <div 
                className={`${open? null : 'hidden'} text-primary`}
                onMouseLeave={handleLeaveFully}
            >
                {stars.map((_, index) => {
                    if (hovering === null){
                        if (index+1 >= minStar && index+1 <= maxStar) {
                            return (
                                <FilledStar i={index}/>
                            )
                        } else {
                            return (
                                <EmptyStar i={index}/>
                            ) 
                        }
                    } else {
                        if (index+1 === hovering){
                            return(
                                <FilledHoverStar i={index}/>
                            )
                        } else {
                            if (!selection_1){
                                return(
                                    <EmptyStar i={index}/>
                                )
                            }
                            if (hovering >= selection_1){
                                if (index+1 >= selection_1 && index+1 < hovering){
                                    return (
                                        <FilledStar i={index}/>
                                    )
                                }
                            } 
                            if (index+1 <= selection_1 && index+1 > hovering){
                                return (
                                    <FilledStar i={index}/>
                                )
                            }
                            return(
                                <EmptyStar i={index}/>
                            )
                        }
                    }
                })}
            </div>              
        </div>
    )
}

const PriceComp = ({priceFilter, setPriceFilter}) => {
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

        if (newValue <= priceFilter[1]){
            newPriceFilter[0] = newValue
        } else {
            newPriceFilter = [newValue, newValue]
        }
        setPriceFilter(newPriceFilter)
    }

    const handleInputChangeMax = (e) => {
        let newValue = convertToDecimal(e.target.value)
        let newPriceFilter = [...priceFilter]

        if (newValue >= priceFilter[0]){
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
                />
                <div className='flex flex-row justify-center items-center'>
                    <div className='w-1/3 relative'>
                        <input
                            value={priceFilter[0]}
                            onChange={(e)=> handleInputChangeMin(e)}
                            className='p-2 outline-primary border border-primary rounded-md text-center w-full'
                            placeholder='$ Min'
                        />
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>$</span>
                    </div>
                    <span className='mx-4'>
                        -
                    </span>
                    <div className='w-1/3 relative'>
                        <input
                            value={priceFilter[1]}
                            onChange={(e)=> handleInputChangeMax(e)}
                            className='p-2 outline-primary border border-primary rounded-md text-center relative w-full'
                            placeholder='$ Max'
                        />
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>$</span>
                    </div>
                </div>
            </div>          
        </div>
    )
}

const OptionComp = ({option, option_index, handleCheckboxClicked}) => {
    const [open, setOpen] = useState(true)
    return(
        <div className=''>
            <div 
                className='flex flex-row justify-between items-center hover:underline cursor-pointer'
                onClick={()=> setOpen((open) => !open)}
            >
                <h3 className='text-[24px]'>
                    {option.display_name}
                </h3>
                { open ? 
                    <ExpandMoreIcon/>
                    :
                    <ExpandLessIcon/>
                }
            </div>
            <div className={`${open? null : 'hidden'}`}>
                {option.tags.map((tag, i) => {
                    return (
                        <div
                            className='flex flex-row items-center justify-start hover:underline cursor-pointer'
                            key={'tag_'+i}
                            onClick={()=>handleCheckboxClicked(option_index, i)}
                        >
                            <span className='text-primary mx-1'>
                                {tag.checked ? 
                                    <CheckBoxIcon/>
                                    : 
                                    <CheckBoxOutlineBlankIcon/>
                                }
                            </span>
                            {tag.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const FilterOptions = ({filters, handleCheckboxClicked, handleCloseFilter, minStar, maxStar, setMinStar, setMaxStar, priceFilter, setPriceFilter}) => {
  return (
    <div 
        className='bg-white rounded-md p-2 w-[300px]'
      >
        <div className='flex justify-between'>
          <p className='text-[20px]'>
            Filter Options
          </p>
          <CloseIcon
            onClick={handleCloseFilter}
            className='hover:scale-105 cursor-pointer'
          />
        </div>
        {filters.map((option, i) => {
            return (
                <OptionComp
                    key={'option_comp_'+i}
                    option={option}
                    option_index={i}
                    handleCheckboxClicked={handleCheckboxClicked}
                />
            )
        })}
        <RatingComp
            minStar={minStar}
            maxStar={maxStar}
            setMinStar={setMinStar}
            setMaxStar={setMaxStar}
        />
        <PriceComp
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
        />
      </div>
  )
}

export default FilterOptions