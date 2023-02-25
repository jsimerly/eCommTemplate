import { fun, electronics, kids, leisure } from '../../assets/images/categories'
import { categories } from '../../constants'


const CatCard = ({img, text, color}) => (
    <div className={`flex flex-col w-full rounded-md cursor-pointer relative`}>
        <img src={img} className='h-full w-full rounded-md'/>
        <div className='absolute top-0 w-full text-center pb-2'>
            <h2 className='text-white text-[40px] font-bold br-text-outline-thick'>
                {text}
            </h2>
        </div>
    </div>
)

const Categories = () => {
  return (
    <div className='flex flex-col w-full justify-center p-2 px-6'>
        <div className='flex justify-center items-center text-[36px] text-center font-bold text-tertiary pb-6 mx-3'>
            {categories.title}
        </div>
        <div className='grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:space-x-3'>
            {categories.cats.map((cat, index) => {
                return (
                    <CatCard 
                        img={cat.img} 
                        text={cat.header} 
                        color={cat.bg_color}
                        key={index}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Categories