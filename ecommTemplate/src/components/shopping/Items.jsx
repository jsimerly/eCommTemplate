import { ProductCard } from "."
import Empty from "../utils/Empty"

const sortProducts = (products, sortBy) => {
    const productsCopy = [...products];
  
    if (sortBy === "Price - Low to High") {
      return productsCopy.sort(
        (a, b) => parseFloat(a.total_cost) - parseFloat(b.total_cost)
      );
    } else if (sortBy === "Price - High to Low") {
      return productsCopy.sort(
        (a, b) => parseFloat(b.total_cost) - parseFloat(a.total_cost)
      );
    } else {
      return products;
    }
  };

const Items = ({products, sortBy}) => {
    const sortedProducts = sortProducts(products, sortBy)
   return (
    <div
        className='bg-white rounded-md w-full justify-center p-2'
    >
        <div className="flex flex-wrap w-full min-h-[300px]">
            {sortedProducts && sortedProducts.length === 0 ?
                <Empty/>
                :
                sortedProducts.map((item, i) => (
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