import { cat_fun, cat_electronics, cat_kids, cat_leisure } from '../assets/images/'

const CatCard = ({img, text}) => (
    <div className='flex w-full rounded-md relative cursor-pointer'>
        <img src={img} className='rounded-md'/>
        <div className='absolute w-full top-[10%]'>
            <div className='flex justify-center text-white font-bold text-[30px] sm:text-[44px] br-text-outline-thick'>
                {text}
            </div>
        </div>
    </div>
)

const Categories = () => {
  return (
    <div className='flex flex-col w-full justify-center p-2'>
        <div className='flex justify-center items-center text-[36px] text-center font-bold text-tertiary pb-6 mx-6'>
            Something for Everyone
        </div>
        <div className='grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:space-x-6'>
            <CatCard img={cat_leisure} text='Leisure'/>
            <CatCard img={cat_fun} text='Fun'/>
            <CatCard img={cat_kids} text='Kids'/>
            <CatCard img={cat_electronics} text='Electronics'/>
        </div>
    </div>
  )
}

export default Categories