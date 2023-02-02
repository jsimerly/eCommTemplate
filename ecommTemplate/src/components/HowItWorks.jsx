import { howToInfo } from '../constants'

const StepCard = ({icon, title, paragraph, index}) => (
    <div className='border flex flew-row rounded-md mb-2 p-4 bg-white shadow-md transition ease-in-out hover:scale-105'>
        <div className='w-[64px] h-[64px] rounded-md flex justify-center items-center'>
            <img src={icon} />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-semibold text-[18px] mb-1'>
                {title}
            </h4>
            <p className='text-[14px]'>
                {paragraph}
            </p>
        </div>
    </div>
)

const HowItWorks = () => {
  return (
    <div
        className='flex sm:flex-row flex-col p-6 font-poppins text-primary'
    >
        <div>
            <h1 className='text-[48px] w-full'>
                {howToInfo.title}
            </h1>
            <div className='max-w-[470px] mt-5'>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </div>
            <button>
                CTA
            </button>
        </div>
        <div className='ml-10'>
            {howToInfo.steps.map((step, index) => (
                <StepCard icon={step.logo} key={index} title={step.title} paragraph={step.paragraph} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default HowItWorks