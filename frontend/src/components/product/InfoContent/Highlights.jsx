

const Highlights = ({highlights}) => {
  return (
    <div className="flex justify-center">
      <ul className='list-disc w-[90%]'>
          {highlights.map((highlight, i) => (
              <li key={'highlights_'+i}>
                {highlight}
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Highlights