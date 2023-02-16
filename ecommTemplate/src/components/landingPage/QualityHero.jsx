import {
    jbl_white_logo,
    diawa_white_logo,
    nike_white_logo,
    pyzel_white_logo,
    rei_coop_white_logo,
    rtic_white_logo,
    sony_white_logo,
    yeti_white_logo,
}  from "../../assets/images/logos"

const topRightLogos = [yeti_white_logo, sony_white_logo, diawa_white_logo, rtic_white_logo]
const bottomLeftLogos = [nike_white_logo, jbl_white_logo, pyzel_white_logo, rei_coop_white_logo]

const QualityHeroV2 = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-tertiary md:min-w-[1280px]">
            <div className="flex justify-center items-center bg-white sm:rounded-tl-md relative">
            <div className="flex justify-center items-center flex-col md:w-[600px] p-10">
                    <h1 className="text-[28px] md:text-[40px] text-center font-bold"> <span className="text-primary"> 100% </span>Quality Guarantee</h1>
                    <p className="text-center md:text-[20px]">
                        We only work with the best products. If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> Free. </span> 
                    </p>
                </div>
            </div>   
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center px-6 p-2 sm:p-10 bg-tertiary">
                {topRightLogos.map((logo, index) => (
                    <div key={index} className="p-4 md:p-10 md:h-[160px] flex justify-center items-center">
                        <img src={logo} className='max-h-[80px]' key={index}/>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center sm:rounded-b-md px-6 py-2 sm:p-10 bg-tertiary">
                {bottomLeftLogos.map((logo, index ) => (
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