import { useState } from "react"
import {Details, ReturnDamage, Reviews, Specs} from './'



const classProps = (selected) => {
  if (selected == true){
    return 'underline font-semibold text-primary'
  }
  return ''
}

const Information = () => {
  const [view, setView] = useState('Details')

  const HeaderButton = ({type}) => (
    <button 
      className={`${classProps(view==type)} hover:underline`}
      onClick={()=> setView(type)}
    >
      {type}
    </button>
  )
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
        <div className="bg-white w-full p-4 justify-center flex flex-col items-center rounded-md">
          <div className="flex flex-row justify-center p-2 items-center space-x-12 text-[18px]">
            <HeaderButton
              type='Details'
            />
            <HeaderButton
              type='Specifications'
            />
            <HeaderButton
              type='Returns & Damages'
            />
            <HeaderButton
              type='Reviews'
            />            
          </div>
            <div className="border w-4/5 border-primary"/>
            <div className="flex p-6 w-full">
              {infoDict[view]}
            </div>
        </div>
    </div>
  )
}

export default Information