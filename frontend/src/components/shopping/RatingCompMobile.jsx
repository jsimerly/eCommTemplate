import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

import { useState } from 'react';

const RatingCompMobile = ({starFilter, setStarFilter}) => {
    const [open, setOpen] = useState(true)
    const [selection_1, setSelection_1] = useState(null)
    const stars = Array(5).fill(null) //static array

    const handleClick = (index) => {
        console.log('ehere')
        if (selection_1 === null){
            setSelection_1(index+1)
        } else {
            if (selection_1 <= index){
                setStarFilter([selection_1, index+1])
            } else {
                setStarFilter([index+1, selection_1])
            }
            setSelection_1(null)
        }
    }

    const FilledStar = ({i}) => (
        <StarIcon
            key={'filled_star_m_'+i}
            sx={{fontSize: 30}}
            onClick={()=>handleClick(i)}
        />
    )

    const EmptyStar = ({i}) => (
        <StarOutlineIcon
            key={'empty_star_m_'+i}
            sx={{fontSize: 30}}
            onClick={()=>handleClick(i)}
        />
    )

    return (
        <div className='sm:hidden'>
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
                className={`${open? null : 'hidden'} inline-flex text-primary py-3`}
            >
                {stars.map((_, index) => {
                    console.log(selection_1)
                    if (!selection_1){
                        if (index+1 >= starFilter[0] && index+1 <= starFilter[1]){
                            return <FilledStar i={index}/>

                        } else {
                            return <EmptyStar i={index}/>
                        }
                    } else {
                        if (selection_1 === index+1){
                            return <FilledStar i={index}/>
                        }
                        return <EmptyStar i={index}/>
                    }

                })}
            </div>              
        </div>
    )
}

export default RatingCompMobile