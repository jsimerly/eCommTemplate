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
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const topRightLogos = [yeti_white_logo, sony_white_logo, diawa_white_logo, rtic_white_logo]
const bottomLeftLogos = [nike_white_logo, jbl_white_logo, pyzel_white_logo, rei_coop_white_logo]

const QualityHero = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-tertiary grid grid-cols-2 min-w-[1280px]">
            <div className="flex justify-center items-center bg-white rounded-tl-md relative">
                <div className="flex justify-center items-center flex-col w-[320px] h-[300px]">
                    <h1 className="text-[40px] text-center font-bold"> <span className="text-primary"> 100% </span>Quality Guarantee</h1>
                    <p className="text-center text-[20px]">
                        If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> free. </span>
                    </p>
                    {/* <img src={guarantee_logo} className='absolute bottom-[-70px] right-[-70px] h-[140px] w-[140px] z-10'/> */}
                </div>
            </div>   
            <div className="grid grid-cols-2 justify-center items-center rounded-tr-md p-10 bg-tertiary">
                {topRightLogos.map((logo, index) => (
                    <div className="p-10 h-[160px] flex justify-center items-center op">
                        <img src={logo} className='max-h-[80px]'/>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 justify-center items-center rounded-bl-md p-10 bg-tertiary">
                {bottomLeftLogos.map((logo, index) => (
                        <div className="p-10 h-[160px] flex justify-center items-center">
                            <img src={logo} className='max-h-[80px]'/>
                        </div>
                    ))}
            </div>
            <div className="flex justify-center items-center bg-white rounded-br-md">
                <h1 className="flex text-[40px] text-center w-[320px] h-[300px] items-center justify-center flex-wrap">
                    <div>
                        <div className="font-bold ">
                            Enjoy <span className="text-primary ">Same Day</span>  Replacement
                        </div>
                        <p className="text-center text-[20px]">
                            Jacob
                        </p>
                    </div>

                </h1>
            </div>
        </div>
    </div>

  )
}

export default QualityHero