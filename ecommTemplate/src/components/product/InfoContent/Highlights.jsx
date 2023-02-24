

const Highlights = ({context}) => {
  return (
    <div className="flex justify-center">
      <ul className='list-disc'>
          {context.map((highlight, i) => (
              <li>
                {highlight}
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Highlights