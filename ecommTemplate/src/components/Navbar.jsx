import {useState, useEffect, useRef} from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    let sidebarRef = useRef()


    useEffect(() => {

        let handler = (e) => {
            if (!sidebarRef.current.contains(e.target)){
                setMenuToggle(false)
            }
        }

        document.addEventListener('mousedown', handler)
        
        // return (
        //     document.removeEventListener('mousedown', handler)
        // )
    })

    
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
        
        <div ref={sidebarRef}>
            <div className='text-white sm:hidden flex flex-1 justify-end items-center'> 
                <button
                    onClick={()=>  setMenuToggle((menuToggle) => !menuToggle)}
                >   
                    {menuToggle? 
                    //If menu is open show an X
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>: 
                    //If menu is not open show 3 bars
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>}
                </button>
            </div>
            <div
                className={`flex absolute min-w-[140px] h-full top-[72px] right-0 tranform ${menuToggle? '' : 'translate-x-full'} transition duration-200 ease-in-out`}
            >
                <Sidebar/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar