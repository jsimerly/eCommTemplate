import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

import { useEffect, useState } from 'react';

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

    const handleMouseLeave = () => {
        setHovering(null)
    }

    const handleLeaveFully = () => {
        setHoveringDisabled(false)
    }

    const FilledStar = ({i}) => (
        <StarIcon 
            key={i} 
            sx={{ fontSize: 30 }}
            onMouseEnter={()=> handleMouseEnter(i)}
        />
    )

    const FilledHoverStar = ({i}) => (
        <StarIcon 
            className='cursor-pointer hover:scale-110'
            key={i} 
            sx={{ fontSize: 30 }}
            onClick={()=>handleClick(i)}
            onMouseEnter={()=> handleMouseEnter(i)}
        />
    )

    const EmptyStar = ({i}) => (
        <StarOutlineIcon 
            key={i} 
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

const PriceComp = () => {
    const [open, setOpen] = useState(true)

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
            <div className={`${open? null : 'hidden'}`}>
                PRETEND STUFF
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

const FilterOptions = ({filters, handleCheckboxClicked, handleCloseFilter, minStar, maxStar, setMinStar, setMaxStar, minPrice, maxPrice}) => {
  return (
    <div 
        className='bg-white rounded-md p-2 min-w-[300px]'
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
        <PriceComp/>
        
      </div>
  )
}

export default FilterOptions