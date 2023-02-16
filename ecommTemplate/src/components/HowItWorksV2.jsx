import { full_line_drawing } from "../assets/images"



const StepCard = ({n, title, paragraph, index}) => (
    <div className='flex flex-col sm:items-center mx-4 flex-1'>
        <div className='flex justify-start sm:justify-end items-center sm:min-h-[80px] mt-3 sm:mt-0 ml-16 sm:ml-0'>
            <div className='rounded-full min-w-[42px] min-h-[40px] flex justify-center items-center border-4 border-primary text-[24px] text-primary font-bold'>
                {n}
            </div>
            <h1 className='mx-4 font-bold text-[24px]'>
                {title}
            </h1>
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
            <h1 className='text-[28px] sm:text-[48px] w-full text-primary text-center mb-6 px-6 order-1'>
                Your Vacation Made Easy
            </h1>
            <div className='flex flex-col sm:flex-row justify-between w-full text-tertiary order-3 sm:order-2'>
                <StepCard n={1} title={'Tell Us Where'} paragraph="No need to leave the condo, just let us know where to go."/>
                <StepCard n={2} title={'Tell Us When'} paragraph="Taking a long weekend or extended getaway? We'll make sure it's time well spent."/>
                <StepCard n={3} title={'Tell Us What'} paragraph="Need a hammock, canopy, and surfboard? We've got you covered."/>
                <StepCard n={4} title={'Relax'} paragraph='Enjoy your hassle free vacation.'/>
            </div>
            <div className='w-full flex justify-center my-6 order-2 sm:order-3'>
                <img src={full_line_drawing}/>
            </div>
        </div>
    </div>
  )
}

export default HowItWorksV2