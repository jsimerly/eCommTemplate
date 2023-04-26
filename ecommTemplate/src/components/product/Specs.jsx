
const Specs = ({specs}) => {
  return (
    <div className="flex w-full bg-tertiaryTone-100 mx-1 p-6 justify-around rounded-md">
      <table className="w-full  border border-white rounded-md ">
        <tbody>
          {Object.keys(specs).map((key, i) => {
            return(
              <tr 
                className={`${i%2 == 0 ? 'bg-white' : 'bg-tertiaryTone-100'}`}
                key={'specs_table_row'+i}
              >
                <td >{key}</td>
                <td className="w-2/3 pl-3">{specs[key]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Specs