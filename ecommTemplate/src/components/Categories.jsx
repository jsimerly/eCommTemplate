import { games } from '../assets/images/'

const CatCard = ({img}) => (
    <div className='flex w-full rounded-md'>
        <img src={img} className='rounded-md'/>
    </div>
)

const Categories = () => {
  return (
    <div className='flex flex-col w-full justify-center'>
        <div className='flex justify-center items-center text-[36px] text-center font-bold text-tertiary pb-6 mx-6'>
            Something for Everyone
        </div>
        <div className='flex flex-row space-x-6'>
            <CatCard img={games}/>
            <CatCard img={games}/>
            <CatCard img={games}/>
            <CatCard img={games}/>
        </div>
    </div>
  )
}

export default Categories