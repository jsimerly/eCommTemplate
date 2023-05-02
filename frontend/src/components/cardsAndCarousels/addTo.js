import { fetchItemsToCart, fetchItemFavorited  } from '../../api/fetchCart';

export async function addItemsToCart(items, setCartSize, addExtraFunction=null,) {
    try {
      const response = await fetchItemsToCart(items)
      return response

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