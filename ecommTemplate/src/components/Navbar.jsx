import { useState } from 'react';

import { main_blue } from '/src/assets/images/blueElf'
import Searchbar from './Searchbar';
import styles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import navigateCart from '../hooks/navigateCart';

const itemsInCart = 3

const AccountDropdown = ({open}) => {
    return (
        <div className={`${open ?  '' : 'hidden'} absolute top-[76px] -left-6 z-10 bg-white shadow-md rounded-md w-[240px] text-tertiary p-4`}>
            <h3 className='p-2 font-bold'>
                My Account
            </h3>
            <ul className='px-4'>
                <li className='hover:underline cursor-pointer'> Account Details </li>
                <li className='hover:underline cursor-pointer'> Orders </li>
                <li className='hover:underline cursor-pointer'> Favorites </li>
                <li className='hover:underline cursor-pointer'> Preferences </li>
            </ul>
            <div className='border border-primary m-2'/>
            <div className='px-2 space-y-1 flex flex-col justify-center items-center'>
                <h3 className='w-full font-bold hover:underline'>
                    Sign-In or Register
                </h3>
                <input 
                    className='w-full border border-primary rounded-md pl-2 outline-primary p-1'
                    placeholder='Email or Phone Number'
                />
                <input 
                    className='w-full border border-primary rounded-md pl-2 p-1 outline-primary'
                    placeholder='Password'
                    type='password'
                />
                <div className='flex w-full justify-around space-x-1 pt-1'>
                    <button className='px-2 w-1/2 bg-primary text-white rounded-md hover:underline'>
                        Sign-In
                    </button>
                    <button className='px-2 w-1/2 bg-white text-primary rounded-md border border-primary hover:underline'>
                        Register
                    </button>
                </div>
                <span className='text-[12px] underline'> Forgot Password </span>
            </div>
        </div>
    )
}

const Navbar = ({immediateSearch}) => {

    const [openAccount, setOpenAccount] = useState(false)

  return (
    <nav className={`bg-white text-primary w-full flex p-4 justify-center items-center fixed z-20 h-[80px]`}>
            <div className={`${styles.boxWidth} flex justify-between items-center`}>
                <a href='/'>
                    <div className='flex justify-start items-center text-[28px] mr-5' to='/'>
                        <img
                            src={main_blue}
                            className='w-[42px] h-[42px] mr-2 cursor-pointer '
                        />
                        <div className='font-londrina hidden sm:hidden md:block cursor-pointer'>
                            Blue Elf
                        </div>
                    </div>
                </a>
                <div className='flex-1 justify-start items-center w-full hidden sm:block'>
                    <Searchbar
                        immediateSearch={immediateSearch}
                    />
                </div>
                <div className='flex justify-end items-center relative overflow-visible'>
                    <div className='flex h-[40px] w-[40px] justify-between items-center cursor-pointer'>
                        <PersonIcon 
                            className='hover:scale-110'
                            sx={{fontSize: '40px'}}
                            onClick = {() => setOpenAccount(!openAccount)}
                        />
                        <AccountDropdown open={openAccount}/>
                    </div>
                    <div className='flex flex-row cursor-pointer'>
                        <div 
                            className='relative'
                            onClick={navigateCart()}
                        >
                            <ShoppingCartIcon 
                                className='hover:scale-110 m-3'
                                sx={{fontSize:'36px'}}
                            />
                            <div className='absolute top-1 right-1 leading-none rounded-full flex justify-center items-center text-[12px] text-white bg-primary p-1'>
                                <div className='text-[12px] text-white text-center'>
                                        {itemsInCart}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar