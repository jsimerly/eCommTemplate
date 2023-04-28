import HelpCard from "./support/HelpCard"
import { helpButtons, accountButtons } from "./help_constants"

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState, useRef, useContext } from "react";
import { fetchCreateBulkRequest } from "../../api/fetchCustomer";
import { ShoppingContext } from '../../context';

const HelpPage = () => {
    const [openRequest, setOpenRequest] = useState(false)
    const {handleNotification} = useContext(ShoppingContext)

    const emailRef = useRef()
    const phoneRef = useRef()

    const handleRequestClicked = () => {
        setOpenRequest((openRequest) => !openRequest)
    }

    const handleSubmit = async () => {
        const data = {
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        };
        try {
            const response = await fetchCreateBulkRequest(data);
            if (response.status === 201) {
                // Reset form
                handleNotification('Your request has been submitted, someone from our sales department will be with you shortly.')
                emailRef.current.value = '';
                phoneRef.current.value = '';
                setOpenRequest(false);
            } else {
                handleNotification("Failed to submit your request, please ensure all fields are filled out properly.", null, true)
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className="flex flex-col justify-center items-center py-10 px-3">
    <div className="w-full text-tertiary flex flex-col justify-center items-center">
        <h1 className="font-bold text-[30px] sm:text-[80px] sm:py-10 px-6">
            Help Center
        </h1>
        <div className="max-w-[1280px] w-full flex flex-col">
            <div className="flex flex-col gap-2 justify-center">
                <h2 className="text-[18px] sm:text-[30px] font-bold">Support</h2>
                <div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-4">
                    {helpButtons.map((card, i)=> (
                        <HelpCard
                            title={card.title}
                            desc={card.desc}
                            icon={card.icon}
                            key={i}
                            link={card.link}
                        />
                    ))}
                </div>
                <h2 className="text-[30px] font-bold mt-6">Account</h2>
                <div className="w-full flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-4">
                    {accountButtons.map((card, i)=> (
                        <HelpCard
                            title={card.title}
                            desc={card.desc}
                            icon={card.icon}
                            key={i}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
    <div className="sm:w-2/3 flex flex-col sm:flex-row sm:justify-between items-between gap-2 text-tertiary mt-20">
        <div className="flex flex-col items-center">
            <h2 className="text-[36px] font-bold text-center leading-none">Customer <br/> Service Team</h2>
            <p className="w-[300px] text-center">Contact Blue Elf on help on order, products, and general inquiries.</p>
            <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-[18px] ">Hours</h3>
                <p className="underline">Monday - Friday</p>
                <p>7:00 AM - 6:00 PM EST</p>
                <p className="underline">Saturday - Sunday</p>
                <p>9:00 AM - 4:00 PM EST</p>
            </div>
            <div className="mt-6 flex flex-col justify-start">
                <h3 className="font-bold text-[18px] w-full text-center">Conacts</h3>
                <div className="flex flex-row ">
                    <EmailIcon className="mx-2"/>
                    <p> support@goBlueElf.com</p>
                </div>
                <div className='flex flex-row'>
                    <CallIcon className="mx-2"/>
                    <p> 1-800-555-3424</p>
                </div>
            </div>
        </div>
        <div>
            <h2 className="text-[36px] font-bold text-center leading-none">Corporate <br/> Office</h2>
            <p className="w-[300px] text-center">Our Home Corporate Location</p>
            <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-[18px] ">Address</h3>
                <div className="flex flex-col ">                    
                    <div>105 S First Colonial Rd</div>
                    <div>Virgina Beach, VA, 23454</div>
                </div>

            </div>
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-[36px] font-bold leading-none text-center">Large Event <br/> Rentals</h2>
            <p className="w-[300px] text-center">Trying to rent in bulk for an event, contact our event sales team.</p>
            <div className="mt-6 flex flex-col justify-start">
                <h3 className="font-bold text-[18px] w-full text-center">Conacts</h3>
                <div className="flex flex-row ">
                    <EmailIcon className="mx-2"/>
                    <p> sales@goBlueElf.com</p>
                </div>
                <div className='flex flex-row'>
                    <CallIcon className="mx-2"/>
                    <p> 1-800-555-3429</p>
                </div>
            </div>
            <div className='mt-6'>
                <a 
                    onClick={handleRequestClicked}
                    className='hover:underline font-semibold cursor-pointer'>Request a Quote
                </a>
            </div>
            {openRequest && 
            <div className="flex flex-col gap-2">
                <h4 className="w-full text-center">
                    Contact Information
                </h4>
                <input
                    ref={emailRef}
                    className="outline-primary border border-primary rounded-md p-2"
                    placeholder="Email"
                />
                <input
                    ref={phoneRef}
                    className="outline-primary border border-primary rounded-md p-2"
                    placeholder="Phone Number"
                />
                <button
                    className="bg-primary text-white p-2 rounded-md"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            }
        </div>
    </div>
    </div>
  )
}

export default HelpPage