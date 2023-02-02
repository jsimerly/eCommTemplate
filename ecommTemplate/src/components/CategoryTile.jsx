import React from 'react'

const CategoryTile = (props) => {
  return (
    <div className={`flex flex-col cursor-pointer rounded-md m-2 transition ease-in-out hover:scale-105`}>
        <div className="flex relative">
          <img className='flex rounded-md object-fill w-full' src={props.image}/>
          <div className='absolute bottom-0 text-white font-bold mx-4 sm:text-[30px]'>
            {props.title}
          </div>
        </div>

    </div> 
  )
}

export default CategoryTile