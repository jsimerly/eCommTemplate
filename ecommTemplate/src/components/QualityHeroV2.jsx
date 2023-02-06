import {
    jbl_white_logo,
    diawa_white_logo,
    nike_white_logo,
    pyzel_white_logo,
    rei_coop_white_logo,
    rtic_white_logo,
    sony_white_logo,
    yeti_white_logo,
    guarantee_logo
}  from "../assets/images/logos"

const topRightLogos = [yeti_white_logo, sony_white_logo, diawa_white_logo, rtic_white_logo]
const bottomLeftLogos = [nike_white_logo, jbl_white_logo, pyzel_white_logo, rei_coop_white_logo]

const QualityHeroV2 = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-tertiary min-w-[1280px]">
            <div className="flex justify-center items-center bg-white rounded-tl-md relative">
            <div className="flex justify-center items-center flex-col w-[600px] p-10">
                    <h1 className="text-[40px] text-center font-bold"> <span className="text-primary"> 100% </span>Quality Guarantee</h1>
                    <p className="text-center text-[20px]">
                        We only work with the best products. If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> Free. </span> 
                    </p>
                    {/* <img src={guarantee_logo} className='absolute bottom-[-70px] right-[-70px] h-[140px] w-[140px] z-10'/> */}
                </div>
            </div>   
            <div className="grid grid-cols-4 justify-center items-center p-10 bg-tertiary">
                {topRightLogos.map((logo, index) => (
                    <div key={index} className="p-10 h-[160px] flex justify-center items-center op">
                        <img src={logo} className='max-h-[80px]' key={index}/>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-4 justify-center items-center rounded-b-md p-10 bg-tertiary">
                {bottomLeftLogos.map((logo, index ) => (
                        <div key={index} className="p-10 h-[160px] flex justify-center items-center">
                            <img src={logo} className='max-h-[80px]' key={index}/>
                        </div>
                    ))}
            </div>
        </div>
    </div>

  )
}

export default QualityHeroV2