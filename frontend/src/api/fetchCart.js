import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper, getCookie } from "./cookies";
import { parseDates, datesUrlString } from "./fetchProducts";


export async function fetchItemsToCart(items){
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(items),
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

export async function fetchUpdateQuantity(uuid, quantity){
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify({uuid: uuid, quantity: quantity})
    }
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/update-quantity/`,
            requestOptions
        )
        return response
    } catch (error){
        throw (error)
    }
}

export async function fetchUpdateInsurance(uuid, insurancePurchased){
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify({uuid: uuid, insurance_purchased: insurancePurchased})
    }
    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/update-insurance-purchased/`,
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

export async function fetchSuggestions(startDate, endDate, dateChange){
    const [start, end] = parseDates(startDate, endDate)

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/product-suggestions/?${datesUrlString(start, end, dateChange)}`)
        return response
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


export async function fetchCheckoutStarted(codes, startDate, endDate, dateChange, location){
    const [start, end] = parseDates(startDate, endDate)

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN' : getCookie('csrftoken'),
        },
        body: JSON.stringify(location, codes),
    }

    try{
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/orders/checkout/?${datesUrlString(start, end, dateChange)}`,
            requestOptions
        )
        return response
    } catch (error){
        throw (error)
    }
}
