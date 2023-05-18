import { SwitchComp } from "../utils"
import ErrorBoundry from "../utils/ErrorBoundry"
import {Details, ReturnDamage, Reviews, Specs} from './'

const Information = ({secondaryCardInfo}) => {
  let infoDict = {}
  if (secondaryCardInfo){
    infoDict = {
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
      'Reviews' : <Reviews
                    product={secondaryCardInfo.product}
                  />,
      'Returns & Damages' : <ReturnDamage/>,
      'Specifications' : <Specs specs={secondaryCardInfo.specs}/>
    }
  }

  
  return (
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
    <div className="bg-white rounded-md flex flex-col justify-center items-center mt-6 sm:mt-20 text-neutralDark">
        <h1 className="text-[24px] sm:text-[30px] pt-4">
            Product Information
        </h1>
        {secondaryCardInfo && 
          <div className="p-2 sm:px-6 w-full">
            <SwitchComp
                compDict={infoDict}
                defComp={'Details'}
                className='!border-none'
                />
          </div>
        }

    </div>
    </ErrorBoundry>
  )
}

export default Information