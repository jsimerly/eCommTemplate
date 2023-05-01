import useDropdown from '../hooks/useDropdown';

import { main_blue } from '/src/assets/images/blueElf'
import Searchbar from './searchbar/desktop/Searchbar';
import styles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import navigateCart from '../hooks/navigateCart';
import AccountDropdown from './navBar/AccountDropdown'
import NotificationBar from './navBar/NotificationBar';
import { company } from '../../constants/company_constants';

const Navbar = ({immediateSearch, searchInput, setSearchInput, searchParamActive, setSearchParamActive, cartSize}) => {
    const [openAccount, setOpenAccount, handleClickAccount, node] = useDropdown(false)

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
                            {company.name}
                        </div>
                    </div>
                </a>
                <div className='flex-1 justify-start items-center w-full hidden sm:block'>
                    <Searchbar
                        immediateSearch={immediateSearch}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        searchParamActive={searchParamActive}
                        setSearchParamActive={setSearchParamActive}
                    />
                </div>
                <div className='flex justify-end items-center sm:relative overflow-visible'>
                    <div 
                        className='flex h-[40px] w-[40px] justify-between items-center cursor-pointer '
                        ref={node}
                    >
                        <PersonIcon 
                            className='hover:scale-110'
                            sx={{fontSize: '40px'}}
                            onClick = {handleClickAccount}
                        />
                        <AccountDropdown 
                            open={openAccount}
                        />
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
                            <div className={`absolute top-0 right-0 leading-none rounded-full flex justify-center items-center text-[12px] text-white bg-primary p-1 ${cartSize === 0 ? 'hidden' : null} min-h-[18px] min-w-[18px]`}>
                                <div className='text-[10px] text-white text-center'>
                                    {cartSize}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationBar/>
        </nav>
  )
}

export default Navbar