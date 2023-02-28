import HelpCard from "./HelpCard"
import { helpButtons } from "../../constants/helpCopy"

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const HelpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
    <div className="w-full text-tertiary flex flex-col justify-center items-center">
        <h1 className="font-bold text-[80px] py-10 px-6">
            Help Center
        </h1>
        <div className="flex flex-row gap-2 justify-center">
            <div className="w-2/3 grid grid-cols-3 gap-4">
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
            <div className="w-[300px] bg-white rounded-md p-4 border border-primary"    
            >
                <h2 className="font-bold text-[20px] ">Account Management</h2>
                <ul className="pl-4">
                    <li className="hover:underline cursor-pointer">Change Account Information</li>
                    <li className="hover:underline cursor-pointer">Change Password</li>
                    <li className="hover:underline cursor-pointer">Update Payment Information</li>
                    <li className="hover:underline cursor-pointer">Order Management</li>
                    <li className="hover:underline cursor-pointer">Preferences</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="w-2/3 flex flex-row justify-between items-between gap-2 text-tertiary mt-[200px]">
        <div className="flex flex-col justify-center items-center">
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
                <p> ENTER ADDRESS </p>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-[36px] font-bold leading-none text-center">Large Event <br/> Rentals</h2>
            <p className="w-[300px] text-center">For trying to rent in bulk for events.</p>
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
                <a className='hover:underline font-semibold cursor-pointer'>Request a Quote</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HelpPage