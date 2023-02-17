import { main_blue } from '/src/assets/images/blueElf'
import Searchbar from './Searchbar';
import styles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = (props) => {

  return (
    <nav className={`bg-white text-primary w-full flex p-3 justify-center items-center fixed z-20`}>
        <div className={`${styles.boxWidth} flex justify-between items-center`}>
            <a href='/'>
                <div className='flex justify-start items-center text-[34px] mr-5' to='/'>
                    <img
                        src={main_blue}
                        className='w-[48px] h-[48px] mr-2 cursor-pointer '
                    />
                    <div className='font-londrina hidden sm:hidden md:block cursor-pointer'>
                        Blue Elf
                    </div>
                </div>
            </a>
            <div className='flex-1 justify-start items-center max-w-3xl hidden sm:block'>
                <Searchbar 
                    dests={props.dests}
                    selectedDateRange={props.selectedDateRange}
                    selectedDestination={props.selectedDestination}
                    setSelectedDateRage={props.setSelectedDateRage}
                    setSelectedDestination={props.setSelectedDestination}
                />
            </div>
            <div className='flex justify-end items-center divide-x'>
                <div className='flex p-2 m-2 justify-between items-center cursor-pointer'>
                    <PersonIcon className='scale-125'/>
                    <div className='ml-2 text-[18px] hover:underline hidden md:flex font-poppins'>
                        Sign-In
                    </div>
                </div>
                <div className='pl-4 pt-2 pb-2 pr-2 cursor-pointer'>
                    <ShoppingCartIcon className='scale-125'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar