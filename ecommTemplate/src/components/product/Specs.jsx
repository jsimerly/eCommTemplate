const specs = [
  {title: 'Item Package Dimensions L x W x H', value: '26.5 x 17.7 x 16.2 inches'},
  {title: 'Package Weight', value: '12.32 Kilograms'},
  {title: 'Item Dimensions LxWxH', value: '25.75 x 16.13 x 15.38 inches'},
  {title: 'Item Weight', value: '0.06 Pounds'},
  {title: 'Country of Origin', value: 'United States'},
  {title: 'Warranty Description', value: 'as listed'},
  {title: 'Model Name', value: 'YT45W'},
  {title: 'Color', value: 'White'},
  {title: 'Material', value: 'Plastic'},
  {title: 'Shell', value: 'Hard'},
  {title: 'Manufacturer', value: 'YETI'},
  {title: 'Size', value: '45 quart'},
  {title: 'Sport Type', value: 'Camping & Hiking'}
  ]
const Specs = () => {
  return (
    <div className="flex w-full bg-tertiaryTone-100 mx-1 p-6 justify-around rounded-md">
      <table className="w-full mr-6 border border-white rounded-md ">
        {specs.map((spec, i) => {
          return (
            <tr className={`${i%2 == 0 ? 'bg-white' : 'bg-tertiaryTone-100'}`}>
              <td >{spec.title}</td>
              <td className="w-2/3">{spec.value}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Specs