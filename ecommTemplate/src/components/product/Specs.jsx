
const Specs = ({specs}) => {
  console.log(specs)
  return (
    <div className="flex w-full bg-tertiaryTone-100 mx-1 p-6 justify-around rounded-md">
      <table className="w-full mr-6 border border-white rounded-md ">

        {Object.keys(specs).map((key, i) => {
          return(
            <tr className={`${i%2 == 0 ? 'bg-white' : 'bg-tertiaryTone-100'}`}>
              <td >{key}</td>
              <td className="w-2/3">{specs[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Specs