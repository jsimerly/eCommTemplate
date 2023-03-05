import { useState } from "react"
import { SwitchComp } from "../utils"
import {Details, ReturnDamage, Reviews, Specs} from './'



const classProps = (selected) => {
  if (selected == true){
    return 'underline font-semibold text-primary'
  }
  return ''
}

const Information = () => {
  const [view, setView] = useState('Details')
  
  const infoDict = {
    'Details' : <Details/>,
    'Reviews' : <Reviews/>,
    'Returns & Damages' : <ReturnDamage/>,
    'Specifications' : <Specs/>
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