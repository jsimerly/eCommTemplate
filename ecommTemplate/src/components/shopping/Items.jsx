import { ProductCard } from "."
import Empty from "../utils/Empty"

const Items = ({products}) => {
    console.log(products)
   return (
    <div
        className='bg-white rounded-md w-full justify-center p-2'
    >
        <div className="flex flex-wrap w-full min-h-[300px]">
            {products && products.length === 0 ?
                <Empty/>
                :
                products.map((item, i) => (
                    <ProductCard 
                        key={i}
                        item={item}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Items