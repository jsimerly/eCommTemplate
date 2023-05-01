import { categories } from '../../../constants/pages/landingCopy_constant'
import navigateShopping from '../../hooks/navigateShopping'
import { BlueButton } from '../utils'

const CatCard = ({header, img, desc, cta1, nav, reverse}) => {
    let navShopping = navigateShopping()

    const handleCatClicked = () => {
        navShopping(nav)
    }

    return(
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full md:pt-10 items-center`}>
            <img src={img} className='w-3/5 rounded-md shadow-md'/>
            <div className={`md:w-2/5 text-center pb-2 flex flex-col mx-16`}>
                <div className='h-full flex flex-col justify-center mt-4 md:mt-0 sm:mx-4'>
                    <h3 className='font-bold md:text-[40px] text-[30px] text-primary'>
                        {header}
                    </h3>
                    <div className='text-tertiary text-[18px]'>
                        {desc}
                    </div>
                    <div className='flex flex-row justify-center items-center py-6 '>
                        <div className='w-1/2 shadow-md'>
                            <BlueButton
                                content={cta1}
                                onClick={handleCatClicked}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Categories = () => {
  return (
    <div className='flex flex-col w-full justify-center'>
        <div className='flex justify-center items-center text-[36px] text-center font-bold text-tertiary pb-6 mx-3'>
            {categories.title}
        </div>
        <div className='flex flex-col gap-10 md:gap-[300px] md:pb-[100px]'>
            {categories.cats.map((cat, index) => {
                const reverse = index % 2 === 1
                return (
                    <CatCard 
                        key={index}
                        header={cat.header}
                        desc={cat.desc}
                        img={cat.img}
                        cta1={cat.cta1}
                        nav={cat.nav}
                        reverse={reverse}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Categories