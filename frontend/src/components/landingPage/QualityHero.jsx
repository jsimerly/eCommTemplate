import { quality } from '../../../constants/pages/landingCopy_constant'

const QualityHeroV2 = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-neutralDark md:min-w-[1280px]">
            <div className="flex flex-col justify-center items-center bg-white sm:rounded-tl-md relative py-10">
                <h1 className="text-[28px] md:text-[40px] text-center font-bold"> 
                    {quality.title}
                </h1>
                <p className='text-center md:text-[18px] px-4 sm:max-w-[600px] pt-4'>
                    {quality.paragraph}
                </p>
            </div>   
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center px-6 p-2 sm:p-10 bg-neutralLight rounded-b-md">
                {quality.logos.map((logo, index) => (
                    <div key={index} className="p-4 sm:p-10 md:h-[100px] flex justify-center items-center">
                        <img src={logo} className='max-h-[40px]' key={index}/>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default QualityHeroV2