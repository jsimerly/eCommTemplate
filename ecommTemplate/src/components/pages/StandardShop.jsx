
import styles from '../../styles'

import { useContext, useEffect, useState } from "react";
import { BrowsingHistory, ItemSuggestion, ShoppingMain }  from '../shopping';

import ShoppingHero from '../shopping/ShoppingHero';
import { ShoppingContext } from '../../context';
import { fetchCategory  } from '../../api/fetchProducts';

const StandardShop = () => {
  const {selectedDateRange, selectedCategory, handleNotification} = useContext(ShoppingContext)

  const [products, setProductData] = useState([])
  const [categoryInfo, setCategoryInfo] = useState()
  const [relatedCategories, setRelatedCategories] = useState([])

  useEffect(() => {
    const fetchCategoryInfo = async () => {
      //update to get the right data for the range
      const response = await fetchCategory(selectedCategory.fe_id, selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
      if (response.ok){
        const resp = await response.json()
        setCategoryInfo(resp['category'])
        setProductData(resp['products'])
        setRelatedCategories(resp['category']['related_categories'])
      } else {
        handleNotification('Sorry, we appear to be having some technical difficulties. Please visit back once this has been updated.')
      }
    }

    fetchCategoryInfo()
  },[selectedCategory])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='text-tertiary'>
          <ShoppingHero
            categoryInfo={categoryInfo}
          />
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`flex justify-between items-center w-full mt-4`}>
              <div className='w-full'>
                <ShoppingMain
                  products={products}
                  relatedCategories={relatedCategories}
                />
              </div>
            </div>
            <div>
                <ItemSuggestion/>
                <BrowsingHistory/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardShop