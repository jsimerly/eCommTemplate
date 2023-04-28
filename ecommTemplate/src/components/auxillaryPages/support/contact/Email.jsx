import { BlueButton } from "../../../utils"
import { useRef, useContext } from "react"
import { fetchCreateSupportTicket } from "../../../../api/fetchCustomer"
import { ShoppingContext } from '../../../../context';

const Email = () => {
    const {handleNotification} = useContext(ShoppingContext)

    const emailRef = useRef()
    const descRef = useRef()

    const handleSubmit = async () => {
        const data = {
          support_type: 'Other',
          email: emailRef.current.value,
          description: descRef.current.value,
        };
    
        try {
          const response = await fetchCreateSupportTicket(data);
          if (response.ok) {
            handleNotification('Your ticket has been submitted and someone will be in contact with you shortly.')
            emailRef.current.value = '';
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
    <div className='flex flex-col h-full sm:w-3/4 relative z-10'>
        <h3 className="py-2">Email Information</h3>
        <div className="flex flex-row justify-between">
            <input 
                ref={emailRef}
                className="p-2 border pl-4 border-primary rounded-md w-1/2" placeholder="Email"
            />
            <input className="p-2 border pl-4 ml-2 border-primary rounded-md w-1/2" placeholder="CC"/>
        </div>
        <div className="h-full w-full mt-2">
            <textarea
                ref={descRef}
                style={{resize:'none'}}
                className="w-full h-full border border-primary rounded flex justify-start align-text-top p-2 whitespace-normal"
                placeholder="Compose Your Email Here."
            />
        </div>
        <div className="my-2">
            <BlueButton
                content='Send Email'
                onClick={handleSubmit}
            />
        </div>
  </div>
  )
}

export default Email