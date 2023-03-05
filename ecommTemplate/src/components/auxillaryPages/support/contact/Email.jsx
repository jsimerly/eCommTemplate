import React from 'react'

const Email = () => {
  return (
    <div className='flex flex-col h-full w-3/4 relative z-10'>
        <h3 className="py-2">Email Information</h3>
        <div className="flex flex-row justify-between">
            <input className="p-2 border pl-4 border-primary rounded-md w-1/2" placeholder="Email"/>
            <input className="p-2 border pl-4 ml-2 border-primary rounded-md w-1/2" placeholder="CC"/>
        </div>
        <div className="h-full w-full mt-2">
            <textarea
                    style={{resize:'none'}}
                    className="w-full h-full border border-primary rounded flex justify-start align-text-top p-2 whitespace-normal"
                    placeholder="Compose Your Email Here."
            />
        </div>
        <button className="w-full text-center bg-primary text-white my-2 p-2 rounded-md">
            Send Email
        </button>
    </div>
  )
}

export default Email