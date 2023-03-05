import React from 'react'
import { BlueButton } from '../../utils'

const UpdateOrderPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-tertiary p-10'>
      <h1 className='text-[40px] p-3'> Update or Exchange an Order</h1>
      <div className='p-6 bg-white rounded-md w-[600px] border border-primary'>
        <p>Update order even if you are not registered. Enter the order number and email address or phone number used to place the order.</p>
        <div className='py-3'>
          <h2>Order Number</h2>
          <input 
            className='p-2 border border-primary rounded-md bg-white w-full' placeholder='Order Number (XXX-XXXX-XXX)'
          />
        </div>
        <div>
          <h2>Order Email or Phone Number</h2>
          <input 
            className='p-2 border border-primary rounded-md bg-white w-full' 
            placeholder='Order Email or Phone Number'
          />
        </div>
        <div className='w-full flex justify-center items-center pt-3'>
          <BlueButton
            content='Find Order'
            className='w-1/2'
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateOrderPage