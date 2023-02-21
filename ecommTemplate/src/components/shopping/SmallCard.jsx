
import AddIcon from '@mui/icons-material/Add';

const SmallCard = ({text, img, price}) => {
  return (
  
    <div className="bg-tertiaryTone-100 m-2 p-2 flex flex-col ">
      <div className="w-[160px] h-[160px] mb-2 cursor-pointer">
        <img
          className="bg-white object-scale-down rounded-md"
          src={img}
        />
      </div>
      <div className="mb-2 min-h-[45px] max-w-[160px] text-[14px] hover:underline cursor-pointer font-semibold">
        {text}
      </div>
      <div className="flex flex-row justify-between">
        <div>
          {price}
        </div>
        <div className='text-white bg-primary rounded-md cursor-pointer'>
          <AddIcon/>
        </div>
      </div>
    </div>
  )
}

export default SmallCard