import React from 'react'

const CategoryTile = (props) => {
  return (
    <div className={`flex flex-col cursor-pointer rounded-md m-2 bg-white shadow-md`}>
        <div className="flex relative">
          <img className='flex rounded-md object-fill w-full' src={props.image}/>
          <div className='absolute bottom-0 text-white font-bold mx-4 black-text-outline text-[30px]'>
            {props.title}
          </div>
        </div>

    </div> 
  )
}

export default CategoryTile