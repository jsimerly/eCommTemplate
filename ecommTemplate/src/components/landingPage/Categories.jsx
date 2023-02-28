import { fun, electronics, kids, leisure } from '../../assets/images/categories'
import { categories } from '../../constants/landingCopy'


const CatCard = ({header, img, desc, cta1, cta2, reverse}) => (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} w-full py-20`}>
        <img src={img} className='w-3/5 rounded-md'/>
        <div className={`w-2/5 text-center pb-2 flex flex-col justify-end items-center ${reverse ? 'mr-20' : 'ml-20'}`}>
            <div className='h-4/5'>
                <h3 className='font-bold text-[40px] text-primary'>
                    {header}
                </h3>
                <div className='text-tertiary text-[18px]'>
                    {desc}
                </div>
                <div className='flex flex-row justify-center items-center py-6'>
                    <button className='bg-primary p-2 w-1/2 text-white rounded-md hover:underline'> {cta1} </button>
                    <button className='ml-2 bg-primary p-2 w-1/2 text-white rounded-md hover:underline'> {cta2} </button>
                </div>
            </div>

        </div>
    </div>
)

const Categories = () => {
  return (
    <div className='flex flex-col w-full justify-center'>
        <div className='flex justify-center items-center text-[36px] text-center font-bold text-tertiary pb-6 mx-3'>
            {categories.title}
        </div>
        <div className='flex flex-col'>
            {categories.cats.map((cat, index) => {
                const reverse = index % 2 === 1
                console.log(reverse)
                return (
                    <CatCard 
                        key={index}
                        header={cat.header}
                        desc={cat.desc}
                        img={cat.img}
                        cta1={cat.cta1}
                        cta2={cat.cta2}
                        reverse={reverse}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Categories