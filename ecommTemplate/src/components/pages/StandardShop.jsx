
import styles from '../../styles'

import { useEffect } from "react";
import { shoppingPageData } from '../../constants/shopping';
import { BrowsingHistory, ItemSuggestion, ShoppingMain }  from '../shopping';

import ShoppingHero from '../shopping/ShoppingHero';
import { useLocation } from 'react-router-dom';

const StandardShop = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get('categoryId')

  const shoppingData = shoppingPageData[categoryId]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='text-tertiary'>
          <ShoppingHero
            name={shoppingData['title']}
            desc={shoppingData['desc']}
            img={shoppingData['img']}
            parent={shoppingData['parent']}
          />
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`flex justify-between items-center w-full mt-4`}>
              <div >
                <ShoppingMain
                  filterData={shoppingData['checkboxOptions']}
                  relatedCategories={shoppingData['relatedCategories']}
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