import React from 'react'

const Sidebar = () => {

  return (
      <div className='relative bg-secondaryLight top-0 right-0 w-[70vw] h-full p-6 border'>
        <ul className='list-none flex justify-start flex-1 flex-col divide-y'>
            <li className='font-normal cursor-pointer text-[26px] text-tertiary'>
                Products
            </li>
            <li className=' font-normal cursor-pointer text-[26px] text-tertiary'>
                How It Works
            </li>
            <li className=' font-normal cursor-pointer text-[26px] text-tertiary'>
                Support
            </li>
            <li className='font-normal cursor-pointer text-[26px] text-tertiary'>
                About Us
            </li>
            <li className='font-semibold cursor-pointer text-[26px] text-primary'>
                Sign-In
            </li>
        </ul>
    </div>
    
  )
}

export default Sidebar