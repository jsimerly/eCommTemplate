import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper, getCookie } from "./cookies";


export async function fetchItemsToCart(itemSlugs){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(itemSlugs.map(slug => ({ slug })))
    }
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/add-items/`,
            requestOptions
        )
        return response
    } catch (error){
        throw (error)
    }
}

export async function fetchItemDeleteCart(uuid){
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
    }
    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/items/${uuid}/`, requestOptions)
        return response
    } catch (error) {
        throw (error)
    }
}

export async function fetchCart(setterFunc){
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/cart/`)
        const cart = await response.json()
        setterFunc(cart)
    } catch (error) {
        throw error;
    }
}

export async function fetchItemFavorited(slug){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
    }
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/favorite-item/${slug}/`, requestOptions)
        return response
    } catch (error){
        throw error;
    }
}

export async function fetchCartSize(setterFunc){
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/cart-size/`)
        const data = await response.json()
        setterFunc(data.cart_size)
        return response
    } catch (error){
        throw error;
    }
}
