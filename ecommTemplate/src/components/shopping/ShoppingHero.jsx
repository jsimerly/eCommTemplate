import styles from '../../styles'

const ShoppingHero = ({name, desc, img, parent}) => {
  return (
    <div className='w-full flex flex-col relative'>
        <img
            src={img}
            className='w-full'
        />
        <div className="absolute h-full w-full">
            <div className={`${styles.flexCenter} h-full`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='bg-white w-2/3 rounded-md my-2 p-10 justify-start flex flex-col items-start'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-[60px] leading-none'>
                                {name}
                            </h1>
                            <a className='underline cursor-pointer'> 
                                {parent.name}
                            </a>
                        </div>

                        <p className='text-[20px] mt-4'>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingHero