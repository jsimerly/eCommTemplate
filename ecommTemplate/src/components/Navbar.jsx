import { main_blue } from '/src/assets/images/blueElf'
import Searchbar from './Searchbar';
import styles from '../styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import navigateCart from '../hooks/navigateCart';

const itemsInCart = 3
const favItems = 12

const Navbar = ({immediateSearch}) => {

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
                <div className='flex justify-end items-center '>
                    <div className='flex p-2 m-2 justify-between items-center cursor-pointer'>
                        <PersonIcon className='scale-150'/>
                    </div>
                    <div className='flex flex-row cursor-pointer'>
                        <div 
                            className='relative'
                            onClick={navigateCart()}
                        >
                            <ShoppingCartIcon className='scale-125 m-3'/>
                            <div className='absolute top-1 right-0 leading-none rounded-full flex justify-center items-center text-[12px] text-white bg-primary p-1'>
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