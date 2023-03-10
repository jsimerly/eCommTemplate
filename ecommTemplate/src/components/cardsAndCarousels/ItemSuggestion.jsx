import { yeti45 } from "../../assets/images/products"
import { SmallCard} from "../shopping"
import CarouselTemplate from "./CarouselTemplate"

const suggestions = [
  {text: 'Test1', img: yeti45, price:'$33.33'},
  {text: 'Test2', img: yeti45, price:'$33.33'},
  {text: 'Test3', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test5', img: yeti45, price:'$33.33'},
  {text: 'Test6', img: yeti45, price:'$33.33'},
  {text: 'Test4', img: yeti45, price:'$33.33'},
  {text: 'Test11', img: yeti45, price:'$33.33'},
  {text: 'Test12', img: yeti45, price:'$33.33'},//12
]


const header = (
<div className='flex justify-center sm:justify-start items-center relative text-[24px] text-center font-bold text-tertiary p-2 mt-8 '>
  You May be Interested In
</div>
)

function scrollN(){
  if (window.innerWidth < 680) {
    return 1
  } else if (window.innerWidth < 1200) {
    return 2
  } else {
    return 3
  }
}


const ItemSuggestion = () => {
  return (
    <CarouselTemplate
      Card={SmallCard}
      cardData={suggestions}
      cardW={156}
      header={header}
      scrollNFunc={scrollN}
    />
  )
}

export default ItemSuggestion