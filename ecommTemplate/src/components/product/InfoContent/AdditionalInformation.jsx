import React from 'react'

const AdditionalInformation = ({context}) => {
  return (
    <div className='flex w-full justify-center'>
        <table className='table-fixed w-full border border-white rounded-md'>
            <tbody>
                {context.map((data, i) => {

                    return(
                    <tr className={`
                            ${i%2 == 0 ? 'bg-white' : 'bg-tertiaryTone-100'} w-full`}>
                        <td >{data.title}</td>
                        <td className={`${data.linkable ? 'cursor-pointer underline' : ''}`}>{data.value}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default AdditionalInformation