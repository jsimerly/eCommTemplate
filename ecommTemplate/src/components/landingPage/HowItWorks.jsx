import { full_line_drawing } from "../../assets/images/banners"
import { howToInfo } from "../../../constants/pages/landingCopy_constant"

const StepCard = ({n, title, paragraph, index}) => (

    <div className='flex flex-col sm:items-center mx-4 flex-1'>
        <div className='flex justify-center sm:justify-end items-center sm:min-h-[80px] mt-3 sm:mt-0  w-full'>
            <div className="flex flex-row">
                <div className='rounded-full min-w-[42px] min-h-[40px] flex justify-center items-center border-4 border-primary text-[24px] text-primary font-bold'>
                    {n}
                </div>
                <h1 className={`${n === 4 ? 'text-start pl-8' : 'text-center'} mx-4 font-bold text-[24px] w-[150px] text-center`}>
                    {title}
                </h1>
            </div>
        </div>
        <p className='text-center mt-0 sm:mt-4'>
            {paragraph}
        </p>
    </div>
)

const HowItWorksV2 = () => {
  return (
    <div className='my-6'>
        <div className='flex flex-col justify-center sm:items-start items-center'>
            <h1 className='text-[28px] sm:text-[48px] w-full text-primary text-center px-6 order-1'>
                {howToInfo.title}
            </h1>
            <div className='flex flex-col sm:flex-row justify-between w-full text-tertiary order-3 sm:order-2'>
                {howToInfo.steps.map((step, index) => {
                    return (
                        <StepCard 
                            n={index+1}
                            index={index}
                            title={step.title}
                            paragraph={step.paragraph}
                            key={index}
                        />
                        )
                    })}
            </div>
            <div className='w-full flex justify-center my-6 order-2 sm:order-3'>
                <img src={full_line_drawing}/>
            </div>
        </div>
    </div>
  )
}

export default HowItWorksV2