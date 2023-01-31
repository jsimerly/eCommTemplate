import styles from "../styles"
import heroimg from '../assets/images/heroimg.png'

const Hero = () => {
  return (
    <div className='w-full min-h-[400px] flex justify-center items-center p-5 sm:py-20 bg-secondary'>
      <div className={`${styles.boxWidth} flex justify-center items-center flex-wrap sm:flex-nowrap`}>
        <div
          className='flex mx-3 sm:mx-10 font-poppins text-primary sm:min-w-[400px] flex-col'
        > 
          <div className="font-bold text-[26px] sm:text-[30px] mb-3 flex justify-center sm:justify-start">
            Tailored Vacations. <br/> Timeless Memories.
          </div>
          <div className="text-[14px] sm:text-[18px] font-nobold mb-5">
            Rent products to be dropped off and picked up on your next vacation. Need a hammock, canopy, and surfboard for your getaway? <br/> We've got you covered.
          </div>
          <div className="text-white font-semibold flex justify-center sm:justify-start">
            <button className="bg-primary p-3 rounded-md mr-3 shadow-md">
              Shop Now
            </button>
            <button className="bg-primary p-3 rounded-md shadow-md">
              Learn More
            </button>
          </div>
        </div>
        <div className='flex'>
          <img src={heroimg} className='flex object-fill'/>
        </div>
      </div>
    </div>
  )
}

export default Hero