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
                    name={item.name}
                    brand={item.brand.name}
                    slug={item.slug}
                    average_rating={item.average_rating}
                    n_ratings={item.n_ratings}
                    total_cost={item.total_cost}
                    days={item.days}
                    main_image={item.main_image}
                />
            ))}
        </div>
    </div>
  )
}

export default Items