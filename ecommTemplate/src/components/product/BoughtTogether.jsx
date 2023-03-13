import { FreqBoughtCard } from './'
import AddIcon from '@mui/icons-material/Add';
import { BlueButton } from '../utils';

const prodPairings = ['Cooler Yeti ', 'Chair', 'Canopy', 'Four']

const BoughtTogether = () => {
  return (
    <div className='my-6 bg-white rounded-md pb-6 px-16 text-tertiary justify-center flex flex-col items-center'>
        <h1 className="text-[30px] py-4">
            Frequently Bought Together
        </h1>
        <div className='flex flex-row'>
          {prodPairings.map((pairing, i) => {
            return(
              <div key={"productPair_"+i} className='flex flex-row justify-center items-center'>
                <FreqBoughtCard
                  header={pairing}
                />
                {prodPairings.length-1 == i ? '' : <AddIcon/>}
              </div>
            )
          })}
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex flex-row'>
            <p>Subtotal: </p>
            <div className='flex flex-col items-center justify-start ml-1'>
              <p ><span className='font-semibold text-[18px]'> $50.94</span> (4 items)</p>
              <p className='leading-none text-[12px]'>For 7 Days</p>
            </div>
          </div>
          <div className='ml-2'>
            <BlueButton
              content='Add to Cart'
            />
          </div>
        </div>
    </div>
  )
}

export default BoughtTogether