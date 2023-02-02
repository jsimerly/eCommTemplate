import { howToInfo } from '../constants'
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const iconDict = {
    'kite' : <KitesurfingIcon className='scale-[2.0]'/>,
    'location' : <LocationOnIcon className='scale-[2.0]'/>,
    'calendar': <CalendarMonthIcon className='scale-[2.0]'/>,
    'cart' : <ShoppingCartIcon className='scale-[2.0]'/>,

}

const StepCard = ({icon, title, paragraph, index}) => (
    <div className='border flex flew-row rounded-md mb-2 p-4 bg-white shadow-md transition ease-in-out hover:scale-105'>
        <div className='w-[64px] h-[64px] rounded-md flex justify-center items-center'>
            {iconDict[icon]}
        </div>
        <div className='flex-1 flex flex-col ml-5'>
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
        <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[48px] w-full'>
                {howToInfo.title}
            </h1>
            <div className='max-w-[470px] text-[18px] mt-5 leading-relaxed'>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </div>
            <div className='mt-10 text-white font-semibold'>
                <button className="bg-primary p-3 rounded-md mr-3 shadow-md 
                transition ease-in-out hover:scale-105 text-white text-center min-w-[115px]">
                    Get Started
                </button>
            </div>
            
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