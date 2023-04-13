import { categories } from './landingCopy_constant'
import navigateShopping from '../../hooks/navigateShopping'
import { BlueButton } from '../utils'
import ErrorBoundry from '../utils/ErrorBoundry'


const CatCard = ({header, img, desc, cta1, nav, reverse}) => {
    let navShopping = navigateShopping()

    const handleCatClicked = () => {
        navShopping(nav)
    }

    return(
        <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} w-full sm:pt-10`}>
            <img src={img} className='sm:w-3/5 sm:rounded-md'/>
            <div className={`sm:w-2/5 text-center pb-2 flex flex-col ${reverse ? 'sm:mr-20' : 'sm:ml-20'}`}>
                <div className='h-full flex flex-col justify-center mt-4 sm:mt-0 mx-4'>
                    <h3 className='font-bold sm:text-[40px] text-[30px] text-primary'>
                        {header}
                    </h3>
                    <div className='text-tertiary text-[18px]'>
                        {desc}
                    </div>
                    <div className='flex flex-row justify-center items-center py-6 '>
                        <div className='w-1/2'>
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
        <div className='flex flex-col gap-10 sm:gap-[300px] sm:pb-[100px]'>
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