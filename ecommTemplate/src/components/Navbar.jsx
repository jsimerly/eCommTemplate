import {useState} from 'react';
import whiteLeaf from '/src/assets/images/whiteleafv1.png'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar';
import useClickOutside from '../hooks/useClickOutside';
import styles from '../styles';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    let domNode = useClickOutside(() => {
        setMenuToggle(false);
    })
    

  return (
    <nav className={`bg-primary w-full flex p-3 justify-center items-center`}>
        <div className={`${styles.boxWidth} flex justify-between items-center`}>
            <div className='flex justify-start items-center text-white font-poppins text-[34px] mr-5'>
                <img
                    src={whiteLeaf}
                    className='w-[48px] h-[48px] mr-2 cursor-pointer '
                />
                <div className='sm:hidden md:block'>
                    Elfy
                </div>
            </div>
            
            <div className='flex-1 justify-start items-center max-w-3xl hidden sm:block'>
                <Searchbar/>
            </div>
            <div className='flex justify-end items-center divide-x'>
                <div className='flex p-2 m-2 text-white justify-between items-center cursor-pointer'>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <div className='ml-2 hover:underline hidden md:flex font-poppins'>
                        Sign-In
                    </div>
                </div>
                <div className='pl-4 pt-2 pb-2 pr-2 text-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>
            </div>
            
            {/* <div className='sm:hidden' ref={domNode}>
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
                </div>
            </div> */}
        </div>
    </nav>
  )
}

export default Navbar