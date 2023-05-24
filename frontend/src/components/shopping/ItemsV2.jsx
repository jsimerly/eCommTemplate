import ResponsiveCard from "./ResponsiveCard";
import MobileCard from "../cardsAndCarousels/MobileCard";
import Empty from "../utils/Empty"

const sortProducts = (products, sortBy) => {
  const productsCopy = [...products]
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

const ItemsV2 = ({products, sortBy}) => {
    const sortedProducts = sortProducts(products, sortBy)
   return (
    <div className="flex w-full justify-center shrink">
      <div className="flex sm:flex-row flex-wrap flex-start max-w-[1236px] min-h-[300px] gap-3 shrink">
          {sortedProducts && sortedProducts.length === 0 ?
              <Empty/>
              :
              sortedProducts.map((item, i) => (
                <MobileCard item={item} key={i}/>
              ))
          }
      </div>
    </div>
  )
}

export default ItemsV2