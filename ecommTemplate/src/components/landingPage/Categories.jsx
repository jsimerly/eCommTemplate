import { fun, electronics, kids, leisure } from '../../assets/images/categories'
import { categories } from '../../constants'


const CatCard = ({img, text, color}) => (
    <div className={`flex flex-col w-full rounded-md cursor-pointer`}
    style={{background: color}}
    >
        <div className='flex justify-center text-primary font-bold text-[30px] md:text-[44px]'>
            {text}
        </div>
        <div className='px-10 py-2'>
            <img src={img}/>
        </div>
    </div>
)

const CustomCardLeisure = ({img, text, color}) => (
    <div className='flex w-full rounded-md relative cursor-pointer'
    style={{background: color}}
    >
    <img src={img} className='absolute h-full pl-3 pb-3'/>
    <div className='absolute w-full'>
        <div className='flex justify-center text-primary font-bold text-[30px] md:text-[44px]'>
            {text}
        </div>
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
                if (cat.header == 'Leisure'){
                    return (
                        <CustomCardLeisure 
                            img={cat.img} 
                            text={cat.header} 
                            color={cat.bg_color}
                            key={index}
                            />
                    )
                }
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