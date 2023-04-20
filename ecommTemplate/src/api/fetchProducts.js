import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper } from "./cookies";

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
    const reviewList = await response.json()
    setterFunc(reviewList)
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
