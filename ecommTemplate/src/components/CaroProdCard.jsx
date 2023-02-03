import React from 'react'

const CaroProdCard = (props) => {
  return (
    <div className='min-h-[320px] w-[300px] rounded-md bg-tertiaryTone-100 shadow mx-2 my-6'>
        {props.food}
    </div>
  )
}

export default CaroProdCard