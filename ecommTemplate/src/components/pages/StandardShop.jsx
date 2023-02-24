
import styles from '../../styles'

import { useContext, useEffect } from "react";
import { shoppingPageData } from '../../constants/shopping';
import { BrowsingHistory, ItemSuggestion, ShoppingMain }  from '../shopping';

import ShoppingHero from '../shopping/ShoppingHero';
import { ShoppingContext } from '../../context';
import Navbar from '../Navbar';

const StandardShop = ({immediateSearch}) => {
  const { selectedCategory } = useContext(ShoppingContext)
  const shoppingData = shoppingPageData[selectedCategory.id]

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
                  shoppingData={shoppingData['checkboxOptions']}
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