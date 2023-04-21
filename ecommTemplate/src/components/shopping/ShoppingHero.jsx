import styles from '../../styles'
import { LinkPath } from '../utils/LinkPath';

const ShoppingHero = ({categoryInfo}) => {  
  return (
    <div className='w-full flex flex-col relative'>
        {categoryInfo && (
            <img
                src={categoryInfo.image}
                className='w-full'
            />
        )}
        <div className="absolute h-full w-full">
            <div className={`${styles.flexCenter} h-full`}>
                <div className={`${styles.boxWidth}`}>
                    {categoryInfo && (
                        <div className='bg-white w-2/3 rounded-md my-2 p-10 justify-start flex flex-col items-start'>
                            <div className='flex flex-col items-start'>
                                <div className='text-[12px] flex'>
                                    <LinkPath category={categoryInfo.parent}/>                     
                                </div>
                                <h1 className='font-bold text-[60px] leading-none'>
                                    {categoryInfo.name}
                                </h1>
                            </div>

                            <p className='text-[20px] mt-4'>
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