import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import {Call, Email, OpenTicket} from './contact'

const supportDict = {
  'Open a Ticket' : <OpenTicket/>,
  'Call' : <Call/>,
  'Email' : <Email/>,
}

const classProps = (selected) => {
  if (selected == true){
    return 'underline font-semibold text-primary'
  }
  return ''
}


const ContactSupport = () => {
  const [view, setView] = useState('Open a Ticket')

  
  const HeaderButton = ({type}) => (
    <button
        className={`${classProps(view==type)}  hover:underline`}
        onClick={()=> setView(type)}
    >
        {type}
    </button>
  )


  return (
    <div className='flex justify-center text-tertiary'>
      <div className='max-w-[1280px] w-full flex flex-col items-center'>
        <h1 className='text-[50px]'> Contact Support </h1>
        <div className='flex flex-row justify-between w-full'>

            <div className='w-full mr-6 bg-white rounded-md border border-primary flex flex-col justify-center items-center'>
                  <div className="flex flex-row justify-center p-2 items-center space-x-12 text-[18px] w-full">
                      <div className="">
                          <HeaderButton
                              type='Open a Ticket'
                          />
                      </div>
                      <div className="">
                          <HeaderButton
                              type='Call'
                          />
                      </div>
                      <div className="">
                          <HeaderButton
                              type='Email'
                          />
                      </div>      
                  </div>
                  <div className="w-3/4 border border-primary mb-2"/>
                  <div className="flex w-full justify-center items-center h-[500px]">
                      {supportDict[view]}
                  </div>
              </div>        
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