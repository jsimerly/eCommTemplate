import React from 'react'

const CaroProdCard = (props) => {
  return (
    <div className='min-h-[320px] w-[300px] my-6 mx-3 border rounded-md bg-tertiaryTone-100 shadow'>
        {props.food}
    </div>
  )
}

export default CaroProdCard