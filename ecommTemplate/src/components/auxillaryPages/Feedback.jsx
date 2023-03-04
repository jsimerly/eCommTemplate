import { useState } from "react"

import useDropdown from "../../hooks/useDropdown"
import ExpandMore from "@mui/icons-material/ExpandMore"

const feedbackOptions = [
    'Services',
    'Products',
    'Technology',
    'Other',
]

const Feedback = () => {
    const [open, setOpen, handleClick, node] = useDropdown()

    const [feedbackType, setFeedbackType] = useState('')

    const handleSelection = (option) => {
        setOpen(false);
        setFeedbackType(option)
        console.log(option)
    }

  return (
    <div className="p-6 flex flex-col items-center text-tertiary w-full">
        <div className="w-[600px]">
            <h1 className="font-bold text-[40px] w-full text-center">Feedback</h1>
            <p className="w-full">Please leave whatever feedback you may feel is relevant! We read ALL feedback sumbitions and respond to all feedback that is constructive. Thank you for helping to improve how we do business.</p>
            <h2 className="mt-3">Feedback Type</h2>
            <div ref={node} >
                <div 
                    className="p-2 border border-primary bg-white w-full rounded-md flex flex-row justify-between group cursor-pointer"
                    onClick={handleClick}
                >
                    {feedbackType === '' ? 'Choose Type of Feedback' : feedbackType}
                    <ExpandMore className='group-hover:scale-125'/>
                </div>
                <div className={`${open ? '' : 'hidden'} w-[600px] my-2 bg-white rounded-md absolute  shadow-md z-10`}>
                    <ul className="p-3"> 
                    {feedbackOptions.map((option, i)=> (
                        <li 
                            className="hover:underline cursor-pointer z-10"
                            onClick={()=>handleSelection(option)}
                            key={i}
                        >
                            {option}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <h2 className="mt-3">Feedback Message</h2>
            <div className="w-full h-[300px] relative">
                <textarea
                    style={{resize:'none'}}
                    className="w-full h-full border border-primary rounded flex justify-start align-text-top p-2 whitespace-normal"
                    placeholder="Please leave whatever feedback you feel is relevant."
                />
                <span className="bottom-2 right-2 absolute text-tertiaryTone-300"> (Max Character Count: 1000)</span>
            </div>
            <div className='flex justify-center w-full mt-3'>
                <button className="bg-primary p-2 rounded-md w-1/2 text-white text-center">
                    Submit
                </button>
            </div>
        </div>
    </div>
        
  )
}

export default Feedback