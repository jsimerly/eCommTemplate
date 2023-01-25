import {useState} from 'react'
import Sidebar from './Sidebar'

const menuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
)

const xIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
)

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    
  return (
    <nav className='w-full flex py-6 justify-between items-center'>
        <div className='text-white'> IMG HERE </div>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                Products
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                How It Works
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                Support
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                About Us
            </li>
            <li>
                <button
                    type='button'
                    className='text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 font-medium font-poppins border border-bg-seconday'
                > Sign-In </button>
            </li>
        </ul>
        
        <div className='text-white sm:hidden flex flex-1 justify-end items-center'> 
            <div
                onClick={()=> setMenuToggle((prev) => !prev)}
            >   
                {menuToggle? 
                //If menu is open show an X
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>: 
                //If menu is not open show 3 bars
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>}
            </div>
        </div>
        <div
            className={`${menuToggle ? 'flex' : 'hidden'} p-2 bg-white  border-primary absolute top-[70px] right-0 mx-2 my-2 min-w-[140px] h-full`}
        >
            {/* <Sidebar/> */}
            <ul className='list-none flex justify-start flex-1 flex-col divide-y'>
                <li className='font-poppins font-normal cursor-pointer text-[26px] text-tertiary'>
                    Products
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[26px] text-tertiary'>
                    How It Works
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[26px] text-tertiary'>
                    Support
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[26px] text-tertiary'>
                    About Us
                </li>
                <li className='font-poppins font-semibold cursor-pointer text-[26px] text-primary'>
                    Sign-In
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar