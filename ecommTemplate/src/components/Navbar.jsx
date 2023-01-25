import {useState, useEffect, useRef} from 'react';
import whiteLeaf from '/src/assets/images/whiteleafv1.png'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar';

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let domHandler = (e) => {
            if (!domNode.current.contains(e.target)){
                handler(false);
            }
        }

        document.addEventListener('mousedown', domHandler)

        return () => (
            document.removeEventListener('mousedown', domHandler)
        )
    })

    return domNode
}

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    let domNode = useClickOutside(() => {
        setMenuToggle(false);
    })
    

  return (
    <nav className='w-full flex p-3 justify-between items-center'>
        <img
            src={whiteLeaf}
            className='w-[48px] h-[48px]'
        />

        <div className='hidden'>
            <Searchbar/>
        </div>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            <li className='font-poppins font-normal cursor-pointer text-[14px] text-white mr-6'>
                Products
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[14px] text-white mr-6'>
                How It Works
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[14px] text-white mr-6'>
                Support
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[14px] text-white mr-6'>
                About Us
            </li>
            <li>
                <button
                    type='button'
                    className='text-white bg-primary hover:bg-secondary rounded-lg px-5 py-2.5 text-[14px] font-medium font-poppins border border-bg-seconday'
                > Sign-In </button>
            </li>
        </ul>
        
        <div className='sm:hidden' ref={domNode}>
            <div className='text-white  flex flex-1 justify-end items-center'> 
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
                className={`flex fixed min-w-[140px] h-full top-[72px] right-0 tranform ${menuToggle? '' : 'translate-x-full'} transition duration-200 ease-in-out`}
            >
                <Sidebar/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar