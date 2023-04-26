import { StandardDetails, Highlights, AdditionalInformation } from "./InfoContent"

const DetailBox = ({title, Card, desc}) => (
  <div className='bg-tertiaryTone-100 rounded-md flex flex-col w-full sm:px-3 py-3 mb-2'>
    <h1 className='text-center font-semibold p-2 text-[20px]'>
      {title}
    </h1>
    <div>
      <Card
        desc={desc}
      />
    </div>
  </div>
)

const Details = ({full_desc, highlights, categoryRank, rankLink, brand, msrp, manufactured, sku}) => {

  return (
    <div className='flex flex-col sm:flex-row w-full'>
      <div className="sm:w-1/2">
        <DetailBox
          title='Description'
          Card={StandardDetails}
          desc={full_desc}
        />
      </div>
      <div className="sm:w-1/2 sm:ml-2">
        <div className="flex flex-col">
        <div className='bg-tertiaryTone-100 rounded-md flex flex-col w-full p-3 mb-2'>
          <h1 className='text-center font-semibold p-2 text-[20px]'>
            Highlights
          </h1>
          <Highlights
            highlights={highlights}
          />
        </div>
        <div className='bg-tertiaryTone-100 rounded-md flex flex-col w-full p-3 mb-2'>
          <h1 className='text-center font-semibold p-2 text-[20px]'>
            Additional Information
          </h1>
          <AdditionalInformation
            categoryRank={categoryRank}
            rankLink={rankLink}
            brand={brand}
            msrp={msrp}
            manufactured={manufactured}
            sku={sku}
          />
        </div>
        </div>
      </div>

    </div>
  )
}

export default Details