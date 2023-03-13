

const Highlights = ({context}) => {
  return (
    <div className="flex justify-center">
      <ul className='list-disc'>
          {context.map((highlight, i) => (
              <li key={'highlights_'+i}>
                {highlight}
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Highlights