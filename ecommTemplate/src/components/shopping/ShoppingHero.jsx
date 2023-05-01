import styles from '../../styles'
import { LinkPath } from '../utils/LinkPath';

const ShoppingHero = ({categoryInfo}) => {  
  return (
    <div className='w-full flex flex-col relative bg-[#a4d4f5] h-[200px] sm:h-[400px]'>
        {categoryInfo && (
            <img
                src={categoryInfo.image}
                className='w-full h-full object-cover'
            />
        )}
        <div className="absolute h-full w-full">
            <div className={`${styles.flexCenter} h-full`}>
                <div className={`${styles.boxWidth} flex justify-center sm:justify-start`}>
                    {categoryInfo && (
                        <div className='bg-white w-[80%] sm:w-2/3 rounded-md my-2 p-10 sm:justify-start flex flex-col items-start'>
                            <div className='flex flex-col items-start'>
                                <div className='text-[12px] flex'>
                                    <LinkPath category={categoryInfo.parent}/>                     
                                </div>
                                <h1 className='font-bold  text-[40px] sm:text-[60px] leading-none'>
                                    {categoryInfo.name}
                                </h1>
                            </div>

                            <p className='text-[20px] mt-4 sm:block hidden'>
                                {categoryInfo.desc}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingHero