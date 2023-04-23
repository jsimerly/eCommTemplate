import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper, getCookie } from "./cookies";

export function parseDates(startDate, endDate){
  return [startDate.toISOString().slice(0,10), endDate.toISOString().slice(0,10)]
}

export function datesUrlString(startDate, endDate, dateChange){
  return `startDate=${startDate}&endDate=${endDate}&dateChange=${dateChange}`
}

export async function fetchProductsByUUIDs(uuids, setterFunc) {

  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/products/list/?uuids=${uuids[0]}`);
    const products = await response.json();
    setterFunc(products)
    return products;
  } catch (error) {
    throw error;
  }
}

export async function fetchProductsBySlugs(slugs, setterFunc, startDate, endDate, dateChange) {
  const [start, end] = parseDates(startDate, endDate)

  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/products/list/?slugs=${slugs.join(',')}&${datesUrlString(start,end,dateChange)}`);

    const products = await response.json();
    setterFunc(products);
    return products;

  } catch (error) {
    throw error;
  }
}

export async function fetchFullProductBySlug(slug, setterFunc, startDate, endDate, dateChange){
  const [start, end] = parseDates(startDate, endDate)
  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/slug/${slug}/?${datesUrlString(start,end,dateChange)}`);
    const product = await response.json()
    setterFunc(product)
  } catch (error) {
    throw error;
  }
} 

export async function fetchProductReviewsBySlug(slug, setterFunc){
  try{
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/products/${slug}/reviews/`)
    return response
  } catch (error) {
    throw error
  }
}

export async function fetchCategory(category, startDate, endDate, dateChange){
  const [start, end] = parseDates(startDate, endDate)
  try {
    if (!category){
      return
    }
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/category/${category}/?${datesUrlString(start,end,dateChange)}`);
    return response
  } catch (error) {
    throw error
  }
}

export async function fetchSearch(searchTerms, startDate, endDate, dateChange){
  const [start, end] = parseDates(startDate, endDate)
  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/search/?searchTerms=${searchTerms}&${datesUrlString(start,end,dateChange)}`);
    return response
  } catch (error) {
    throw error
  }
}

export async function fetchManyCategories(category_id){
  try{
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/category_many/${category_id}/`)
    return response
  } catch (error) {
    throw error
  }
}

export async function fetchIndividualCategories(category_id){
  try{
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/category_individual/${category_id}/`)
    return response
  } catch (error) {
    throw error
  }
}

export async function fetchProductGrouping(groupName, startDate, endDate, dateChange) {
  const [start, end] = parseDates(startDate, endDate);
  try {

    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/product-group/${groupName}/?${datesUrlString(start,end,dateChange)}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchProductSuggestions(startDate, endDate, dateChange) {
  const [start, end] = parseDates(startDate, endDate);
  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/product-suggestions/?${datesUrlString(start,end,dateChange)}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchCreateReview(productSlug, rating, recommend, leavingComment, headline, fullComment, anonymous){
  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN' : getCookie('csrftoken'),
    },
    body: JSON.stringify({
      product_slug: productSlug,
      rating: rating,
      recommended: recommend,
      comment_included: leavingComment,
      header: headline,
      body: fullComment,
      anonymous: anonymous,
    }),
}
  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/create-review/`, 
      requestOptions
    )
    return response
  } catch (error) {
    throw (error)
  }
}
