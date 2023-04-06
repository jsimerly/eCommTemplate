import { useEffect, useState } from "react"
import { ProductCard } from "."
import { fetchProductsByCategory } from "../../api/fetchProducts"
import Empty from "../utils/Empty"

const Items = ({categoryId}) => {
    const [productList, setProductList]= useState([])

    useEffect(()=> {
       fetchProductsByCategory(categoryId, setProductList) 
    },[])

  return (
    <div
        className='bg-white rounded-md w-full justify-center p-2'
    >
        <div className="flex flex-wrap w-full min-h-[300px]">
            {productList.length === 0 ?
                <Empty/>
                :
                productList.map((item, i) => (
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