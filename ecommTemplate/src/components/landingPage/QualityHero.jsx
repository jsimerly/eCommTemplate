import { quality } from './landingCopy_constant'

const QualityHeroV2 = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-tertiary md:min-w-[1280px]">
            <div className="flex justify-center items-center bg-white sm:rounded-tl-md relative">
            <div className="flex justify-center items-center flex-col md:w-[600px] p-10">
                <h1 className="text-[28px] md:text-[40px] text-center font-bold"> 
                    {quality.title}
                </h1>, 
                <p className='text-center md:text-[20px]'>
                    {quality.paragraph}
                </p>
            </div>
            </div>   
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center px-6 p-2 sm:p-10 bg-tertiary rounded-b-md">
                {quality.logos.map((logo, index) => (
                    <div key={index} className="p-4 md:p-10 md:h-[160px] flex justify-center items-center">
                        <img src={logo} className='max-h-[80px]' key={index}/>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default QualityHeroV2