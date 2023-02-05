import { yeti_logo, daiwa_logo, sony_logo, nike_logo, JBL_logo, rtci_logo, pyzel_logo, reicoop_logo } from "../assets/images"

const QualityHero = () => {
  return (
    <div className="flex justify-center items center">
        <div className="text-primary grid grid-cols-2">
            <div className="flex justify-center items-center bg-white rounded-br-md">
                <div className="flex justify-center items-center flex-col w-[300px] h-[300px]">
                    <h1 className="text-[40px] text-center font-bold"> 100% Quality Guarantee</h1>
                    <p className="text-center text-[20px]">
                        If you are not satisfied with the quality, we will give you a full refund or replacement for free.
                    </p>

                </div>
            </div>   
            <div className="grid grid-cols-2 justify-center items-center">
                <img src={yeti_logo}/>
                <img src={sony_logo}/>
                <img src={daiwa_logo}/>
                <img src={rtci_logo}/>
            </div>
            <div className="grid grid-cols-2 justify-center items-center">
                <img src={nike_logo}/>
                <img src={JBL_logo}/>
                <img src={pyzel_logo}/>
                <img src={reicoop_logo}/>
            </div>
            <div className="flex justify-center items-center bg-white rounded-tl-md">
                <h1 className="flex text-[40px] text-center w-[300px] h-[300px] items-center justify-center font-bold">
                    Only the Best Products for Your Vacation
                </h1>
            </div>
        </div>
    </div>

  )
}

export default QualityHero