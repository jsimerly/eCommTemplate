import useDropdown from "../../../../hooks/useDropdown"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useState } from "react"


const issues = [
    'Product',
    'Service',
    'Technical',
    'Other',
]

const OpenTicket = () => {
    const [open, setOpen, handleClick, node] = useDropdown(false)
    const [currentIssue, setCurrentIssue] = useState('Issue Type')
  return (
    <div className="w-3/4 flex flex-col items-center h-full py-6">
        <div ref={node} className='w-3/4 relative z-10'>
            <div 
                className="w-full border border-primary p-2 rounded-md flex flex-row justify-between hover:cursor-pointer"
                onClick={handleClick}
            >
                {currentIssue}
                <ExpandMore/>
            </div>
            <div  className={`${open? null : 'hidden'} shadow-md top-10 rounded-md p-3 absolute w-full z-10`}>
                <ul>
                    {issues.map((issue, i) => (
                        <li 
                            onClick={()=>{setCurrentIssue(issue); setOpen(false)}}
                            key={'issue_'+i}
                            className='cursor-pointer hover:underline'
                        >{issue}</li>
                    ))}
                </ul>
            </div>
            <h3 className="py-2">Contact Information</h3>
            <div className="flex flex-row justify-between">
                <input className="p-2 border pl-4 border-primary rounded-md w-1/2" placeholder="Email"/>
                <input className="p-2 border pl-4 ml-2 border-primary rounded-md w-1/2" placeholder="Phone"/>
            </div>
            <div className="h-full mt-2">
                <textarea
                        style={{resize:'none'}}
                        className="w-full h-full border border-primary rounded flex justify-start align-text-top p-2 whitespace-normal"
                        placeholder="Please leave whatever feedback you feel is relevant."
                />
            </div>
            <button className="w-full text-center bg-primary text-white mt-2 p-2 rounded-md">
                Submit Ticket
            </button>
        </div>
    </div>
  )
}

export default OpenTicket