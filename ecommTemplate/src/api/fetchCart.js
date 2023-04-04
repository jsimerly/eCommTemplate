import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper, getCookie } from "./cookies";
import { parseDates, datesUrlString } from "./fetchProducts";


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

export async function fetchCart(setterFunc, startDate, endDate, dateChange){
    const [start, end] = parseDates(startDate, endDate)

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/cart/?${datesUrlString(start, end, dateChange)}`)
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

export async function fetchAllFavorited(setterFunc, startDate, endDate, dateChange){
    const [start, end] = parseDates(startDate, endDate)

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/all-favorites/?${datesUrlString(start, end, dateChange)}`)
        const favorites = await response.json()
        setterFunc(favorites)
    } catch (error) {
        throw error;
    }
}

export async function fetchFavoriteDelete(uuid){
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
    }
    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/remove-favorite/${uuid}/`, requestOptions)
        return response
    } catch (error) {
        throw (error)
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

export async function fetchBrowseHistory(setterFunc, startDate, endDate, dateChange){
    const [start, end] = parseDates(startDate, endDate)

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/customer/history/?${datesUrlString(start, end, dateChange)}`)
        const data = await response.json()
        setterFunc(data)
        return response
    } catch (error) {
        throw error
    }
}

export async function fetchPromoCode(code, startDate, endDate, dateChange){
    const [start, end] = parseDates(startDate, endDate)

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/promo-validation/${code}/?${datesUrlString(start, end, dateChange)}`)
        return response
    } catch (error) {
        throw (error)
    }
}
