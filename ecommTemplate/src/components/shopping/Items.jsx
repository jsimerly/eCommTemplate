import { useEffect, useState } from "react"
import { ProductCard } from "."
import { fetchProductsByCategory } from "../../api/fetchProducts"

const Items = ({categoryId}) => {
    const [productList, setProductList]= useState([])

    useEffect(()=> {
       fetchProductsByCategory(categoryId, setProductList) 
    },[])

    useEffect(()=>{
        console.log(productList)
    },[productList])

  return (
    <div
        className='bg-white rounded-md w-full justify-center p-2'
    >
        <div className="flex flex-wrap w-full">
            {productList.map((item, i) => (
                <ProductCard 
                    key={i}
                    item={item}
                />
            ))}
        </div>
    </div>
  )
}

export default Items