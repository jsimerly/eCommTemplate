import useDropdown from "../../../../hooks/useDropdown"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { useState, useRef, useContext } from "react"
import { BlueButton } from "../../../utils"
import { fetchCreateSupportTicket } from "../../../../api/fetchCustomer"
import { ShoppingContext } from '../../../../context';

const issues = [
    'Product',
    'Service',
    'Technology',
    'Other',
]

const OpenTicket = () => {
    const [open, setOpen, handleClick, node] = useDropdown(false)
    const {handleNotification} = useContext(ShoppingContext)

    const [currentIssue, setCurrentIssue] = useState('Issue Type')
    const emailRef = useRef()
    const phoneRef = useRef()
    const descRef = useRef()

    const handleSubmit = async () => {
        const data = {
          support_type: currentIssue,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          description: descRef.current.value,
        };
    
        try {
          const response = await fetchCreateSupportTicket(data);
          if (response.ok) {
            handleNotification('Your ticket has been submitted and someone will be in contact with you shortly.')
            setCurrentIssue('Issue Type');
            emailRef.current.value = '';
            phoneRef.current.value = '';
            descRef.current.value = '';
          } else {
            handleNotification("Failed to submit a support tickets, please ensure all fields are filled out properly.", null, true)
          }
        } catch (error) {
          console.error(error);
          alert('Failed to submit ticket');
        }
    };

  return (
    <div className="sm:w-3/4 flex flex-col items-center sm:py-6 min-h-[400px]">
        <div ref={node} className='sm:w-3/4 px-2 relative z-10'>
            <div 
                className="w-full border border-primary p-2 rounded-md flex flex-row justify-between hover:cursor-pointer"
                onClick={handleClick}
            >
                {currentIssue}
                <ExpandMore/>
            </div>
            <div  className={`${open? null : 'hidden'} shadow-md top-12 rounded-md p-3 absolute w-full z-30 bg-white`}>
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
                <input 
                    ref={emailRef}
                    className="p-2 border pl-4 border-primary rounded-md w-1/2 outline-primary" 
                    placeholder="Email"
                />
                <input 
                    ref={phoneRef}
                    className="p-2 border pl-4 ml-2 border-primary rounded-md w-1/2 outline-primary" 
                    placeholder="Phone"
                />
            </div>
            <div className="h-full mt-2">
                <textarea
                    ref={descRef}
                    style={{resize:'none'}}
                    className="w-full h-full border border-primary rounded flex justify-start align-text-top p-2 whitespace-normal min-h-[200px] outline-primary"
                    placeholder="Please leave whatever feedback you feel is relevant."
                />
            </div>
            <div className="mt-2">
                <BlueButton
                    content='Submit Ticket'
                    onClick={handleSubmit}
                />
            </div>

        </div>
    </div>
  )
}

export default OpenTicket