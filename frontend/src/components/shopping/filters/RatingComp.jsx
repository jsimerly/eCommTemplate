import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

import { useState } from 'react';

const RatingComp = ({starFilter, setStarFilter}) => {
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
                setStarFilter([selection_1, index+1])
            } else {
                setStarFilter([index+1, selection_1])
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

    const handleLeaveIcon = (index) => {
        setTimeout(() => {
            if (hovering === index + 1) {
              setHovering(null);
            }
          }, 50);
    }

    const handleLeaveFully = () => {
        setHoveringDisabled(false)
        setHovering(null)
    }

    const FilledStar = ({i}) => (
        <StarIcon 
            key={'filled_star_' + i} 
            sx={{ fontSize: 30 }}
            onMouseEnter={()=> handleMouseEnter(i)}
            onMouseLeave={() => handleLeaveIcon(i)}
        />
    )

    const FilledHoverStar = ({i}) => (
        <StarIcon 
            className='cursor-pointer hover:scale-110'
            key={'filled_hover_star_' + i}
            sx={{ fontSize: 30 }}
            onClick={()=>handleClick(i)}
            onMouseEnter={()=> handleMouseEnter(i)}
            onMouseLeave={() => handleLeaveIcon(i)}
        />
    )

    const EmptyStar = ({i}) => (
        <StarOutlineIcon 
            key={'empty_star_' + i} // Add key prop here
            sx={{ fontSize: 30 }} 
            onMouseEnter={()=> handleMouseEnter(i)}
            onMouseLeave={() => handleLeaveIcon(i)}
        />
    )

    return (
        <div
            onMouseLeave={handleLeaveFully}
             className='hidden sm:block'
        >
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
                className={`${open? null : 'hidden'} inline-flex text-primary`}
                onMouseLeave={handleLeaveFully}
            >
                {stars.map((_, index) => {
                    if (hovering === null){
                        if (index+1 >= starFilter[0] && index+1 <= starFilter[1]) {
                            return (
                                <FilledStar key={'filled_star_no_hover_'+index} i={index}/>
                            )
                        } else {
                            return (
                                <EmptyStar key={'empty_star_no_hover_'+index} i={index}/>
                            ) 
                        }
                    } else {
                        if (index+1 === hovering){
                            return(
                                <FilledHoverStar key={'filled_star_hover_'+index} i={index} />
                            )
                        } else {
                            if (!selection_1){
                                return(
                                    <EmptyStar key={'empty_star__hover_'+index} i={index}/>
                                )
                            }
                            if (hovering >= selection_1){
                                if (index+1 >= selection_1 && index+1 < hovering){
                                    return (
                                        <FilledStar key={'filled_star_less_'+index} i={index}/>
                                    )
                                }
                            } 
                            if (index+1 <= selection_1 && index+1 > hovering){
                                return (
                                    <FilledStar key={'filled_star_more_'+index} i={index}/>
                                )
                            } 
                            return(
                                <EmptyStar  key={'empty_star_default_'+index} i={index}/>
                            )
                        }
                    }
                })}
            </div>              
        </div>
    )
}

export default RatingComp