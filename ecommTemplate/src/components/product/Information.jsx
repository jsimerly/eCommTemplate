import { useState } from "react"


const Information = () => {
  const [view, setView] = useState('Details')
  return (
    <div className="flex flex-col justify-center items-center mt-20 text-tertiary">
        <h1 className="text-[30px]">
            Information
        </h1>
        <div className="bg-white w-full p-4 justify-center flex flex-col items-center rounded-md">
          <div className="flex flex-row justify-center p-2 items-center space-x-12 text-[18px]">
            <button className="underline font-semibold">
              Details
            </button>
            <button>
              Specifications
            </button>
            <button>
              Returns & Damage
            </button>
            <button>
              Reviews
            </button>
          </div>
          <div className="border w-4/5"/>
          <div>
            Jacob Simerly
          </div>
        </div>

    </div>
  )
}

export default Information