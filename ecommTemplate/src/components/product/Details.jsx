import { StandardDetails, Highlights, AdditionalInformation } from "./InfoContent"

const text = 'The YETI Tundra 45 is a high-quality, heavy-duty cooler designed to keep your food and drinks cold in even the toughest outdoor conditions. With a capacity of 26 cans or 35 pounds of ice, this cooler is perfect for camping trips, tailgating, and any other outdoor adventure. It is made from durable rotomolded polyethylene and features extra-thick walls and freezer-grade gasket to ensure maximum ice retention. The Tundra 45 also comes with bearfoot non-slip feet, tie-down points for securing it to a boat or vehicle, and a Vortex drain system that makes it easy to drain water. With its rugged construction and superior insulation, the YETI Tundra 45 is a top-of-the-line cooler that can handle anything you throw at it.'

const highlights = [
  'Oversize wheels for all-terrain mobility',
  'Comfort swing-up rear handle for lifting and loading',
  'Hybrid latches for secure lid closure',
  'Oversize engineer-grade hinges with stay-open detent',
  'Fully insulated body & lid for 5 day performance',
  'Fish ruler, media slot and self-draining cup holders on lid',
]

const additonalInfo = [
  {title: 'MSRP', value: '$349'},
  {title: 'Brand', value: 'Yeti'},
  {title: 'Manufatured', value:'USA'},
  {title: 'Ranking', value: '#2 in Coolers', linkable:true, link:''},
  {title: 'UPC', value: 'AJ32N35P'}

]

const additionalDetails = [
  {title: 'Highlights & Features', Card: Highlights, context: highlights},
  {title: 'Additional Information', Card: AdditionalInformation, context: additonalInfo},
]

const DetailBox = ({title, Card, context}) => (
  <div className='bg-tertiaryTone-100 rounded-md mx-1 flex flex-col w-full p-3 mb-2'>
    <h1 className='text-center font-semibold p-2 text-[20px]'>
      {title}
    </h1>
    <div>
      <Card
        context={context}
      />
    </div>
  </div>
)

const Details = () => {
  return (
    <div className='flex flex-row w-full'>
      <div className="w-1/2">
        <DetailBox
          title='Description'
          Card={StandardDetails}
          context={text}
        />
      </div>
      <div className="w-1/2 ml-2">
        <div className="flex flex-col">
          {additionalDetails.map((detail, i) => (
            <DetailBox
              title={detail.title}
              Card={detail.Card}
              context={detail.context}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Details