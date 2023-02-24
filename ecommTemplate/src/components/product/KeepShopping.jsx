import CarouselTemplate  from "../CarouselTemplate"
import { yeti45 } from "../../assets/images/products"
import { SmallCard} from "../shopping"

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

function scrollN(){
    if (window.innerWidth < 680) {
      return 1
    } else if (window.innerWidth < 1200) {
      return 2
    } else {
      return 3
    }
  }

const KeepShopping = () => {

    const header = ( 
        <div className=" bg-white rounded-t-md pt-4 flex justify-center items-center text-tertiary">
            <h2 className="text-[30px] ">
                Product Information
            </h2>
        </div>
    )
  return (
    <CarouselTemplate
        Card={SmallCard}
        cardData={suggestions}
        cardW={166}
        header={header}
        scrollNFunc={scrollN}
    />
  )
}

export default KeepShopping