import {useState} from 'react'

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
                Destinations
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                How It Works
            </li>
            <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white mr-10'>
                About Us
            </li>
        </ul>
        
        <div className='text-white sm:hidden flex flex-1 justify-end items-center'> 
            <div
                onClick={()=> setMenuToggle((prev) => !prev)}
            >
                Menu
            </div>
        </div>
        <div
            className={`${menuToggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px]`}
        >
            <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white'>
                    Product
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white'>
                    Desitnations
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white'>
                    How It Works
                </li>
                <li className='font-poppins font-normal cursor-pointer text-[16px]$ text-white'>
                    About
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar