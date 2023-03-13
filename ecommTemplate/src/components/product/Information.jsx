import { SwitchComp } from "../utils"
import {Details, ReturnDamage, Reviews, Specs} from './'

const Information = ({secondaryCardInfo}) => {

  const infoDict = {
    'Details' : <Details 
                  full_desc={secondaryCardInfo.full_desc}
                  highlights={secondaryCardInfo.highlights}
                  msrp={secondaryCardInfo.msrp}
                  manufactured={secondaryCardInfo.manufactured}
                  brand={secondaryCardInfo.brand}
                  categoryRank={secondaryCardInfo.categoryRank}
                  rank_link={secondaryCardInfo.rank_link}
                  sku={secondaryCardInfo.sku}
                />,
    'Reviews' : <Reviews/>,
    'Returns & Damages' : <ReturnDamage/>,
    'Specifications' : <Specs specs={secondaryCardInfo.specs}/>
  }
  
  return (
    <div className="bg-white rounded-md flex flex-col justify-center items-center mt-20 text-tertiary">
        <h1 className="text-[30px] pt-4">
            Product Information
        </h1>
        <div className="p-6 w-full">
          <SwitchComp
              compDict={infoDict}
              defComp={'Details'}
              className='!border-none'
            />
        </div>
    </div>
  )
}

export default Information