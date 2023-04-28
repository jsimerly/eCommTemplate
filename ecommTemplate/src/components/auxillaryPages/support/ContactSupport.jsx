import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { SwitchComp } from '../../utils';
import {Call, Email, OpenTicket} from './contact'

const supportDict = {
  'Open a Ticket' : <OpenTicket/>,
  'Call' : <Call/>,
  'Email' : <Email/>,
}

const ContactSupport = () => {
    window.scrollTo(0,0)
  return (
    <div className='flex justify-center text-tertiary'>
      <div className='max-w-[1280px] w-full flex flex-col items-center px-3'>
        <h1 className='text-[30px] sm:text-[80px]'> Contact Support </h1>
        <div className='flex flex-col sm:flex-row justify-between w-full min-h-[540px]'>
          <SwitchComp
            compDict={supportDict}
            defComp='Open a Ticket'
            className='mr-4'
          />  
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-md border-primary border">
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
        </div>
      </div>
    </div>
  )
}

export default ContactSupport