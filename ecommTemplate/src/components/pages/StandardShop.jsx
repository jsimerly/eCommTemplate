
import styles from '../../styles'

import { shoppingPageData } from '../../constants/shopping';
import { BrowsingHistory, ItemSuggestion, ShoppingMain }  from '../shopping';

import ShoppingHero from '../shopping/ShoppingHero';

const StandardShop = () => {
  const shoppingData = shoppingPageData['0302']
  return (
    <div className='text-tertiary'>
        <ShoppingHero
          name={shoppingData['name']}
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
  )
}

export default StandardShop