import React from 'react'

const CategoryTile = (props) => {
  return (
    <div className={`flex flex-col cursor-pointer rounded-md m-2 bg-white shadow`}>
        <div className="flex relative">
          <img className='flex rounded-t-md object-fill w-full' src={props.image}/>
          <div className='absolute bottom-0 text-white font-bold mx-4 black-text-outline text-[30px]'>
            {props.title}
          </div>
        </div>
        
        
        <div className='text-tertiary relative mx-4 my-2 text-[14px]'>
          {props.text}
        </div>
    </div> 
  )
}

export default CategoryTile