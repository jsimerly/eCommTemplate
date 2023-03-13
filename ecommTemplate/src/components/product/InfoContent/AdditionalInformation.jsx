import React from 'react'

const AdditionalInformation = ({categoryRank, rankLink, brand, msrp, manufactured, sku}) => {
  return (
    <div className='flex w-full justify-center'>
        <table className='table-fixed w-full border border-white rounded-md'>
            <tbody>
                <tr className='bg-white'>
                    <td>MSRP</td><td>{msrp}</td>
                </tr>
                <tr>
                    <td>Brand</td><td>{brand}</td>
                </tr>
                <tr className='bg-white'>
                    <td>Manufactured</td><td>{manufactured}</td>
                </tr>
                <tr>
                    <td>Ranking</td><td>{categoryRank}</td>
                </tr>
                <tr className='bg-white'>
                    <td>Product ID</td><td>{sku}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AdditionalInformation