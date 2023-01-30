import styles from "../styles"
import heroimg from '../assets/images/heroimg.png'

const Hero = () => {
  return (
    <div className='bg-secondaryTone-30 w-full min-h-[500px] flex justify-center items-center p-5'>
      <div className={`${styles.boxWidth} flex justify-center items-center flex-wrap sm:flex-nowrap`}>
        <div
          className='flex mx-3 sm:mx-10 font-poppins text-primary sm:min-w-[400px] flex-col'
        > 
          <div className="font-bold text-[26px] sm:text-[30px] mb-3 flex justify-center sm:justify-start">
            Tailored Vacations. <br/> Timeless Memories.
          </div>
          <div className="text-[14px] sm:text-[18px] font-nobold mb-5">
            Rent products to be dropped off and picked up on your next vacation. Want a hammock, canopy, and surfboard on your getaway? We've got you covered with no hassle.
          </div>
          <div className="text-secondary font-semibold flex justify-center sm:justify-start">
            <button className="bg-primary p-3 rounded-md mr-3">
              Shop Now
            </button>
            <button className="bg-primary p-3 rounded-md">
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