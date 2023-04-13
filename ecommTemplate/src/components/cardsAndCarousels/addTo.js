import { fetchItemsToCart, fetchItemFavorited  } from '../../api/fetchCart';

export async function addItemToCart(item, setCartSize, addExtraFunction=null, quant=1, ) {
    try {
      const response = await fetchItemsToCart([item.slug])
      const data = await response.json()
      setCartSize(data['cart_size'])
      if (addExtraFunction) {
        addExtraFunction()
      }
    } catch (error) {
      throw (error)
    }
}

export async function addToFavorites(item, setFavorites){
  try {
    const response = await fetchItemFavorited(item.slug)
    if (response.ok){
      const resp = await response.json()
      setFavorites(resp.favorited)
    }
  } catch (error) {
    throw (error)
  }
}