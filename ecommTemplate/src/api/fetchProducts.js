import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper } from "./cookies";

function parseDates(startDate, endDate){
  return [startDate.toISOString().slice(0,10), endDate.toISOString().slice(0,10)]
}

function datesUrlString(startDate, endDate, dateChange){
  return `startDate=${startDate}&endDate=${endDate}&dateChange=${dateChange}`
}

export async function fetchProductsByUUIDs(uuids, setterFunc) {

  try {
    const response = await fetch(`${SERVER_ADDRESS}/api/products/products/list/?uuids=${uuids[0]}`);
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
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/products/list/?slugs=${slugs.join(',')}&${datesUrlString(start,end,dateChange)}`, {
      credentials: 'include'
    });

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
    const response = await fetch(`${SERVER_ADDRESS}/api/products/slug/${slug}/?${datesUrlString(start,end,dateChange)}`);
    const product = await response.json()
    setterFunc(product)
  } catch (error) {
    throw error;
  }
} 

export async function fetchProductReviewsBySlug(slug, setterFunc){
  try{
    const response = await fetch(`${SERVER_ADDRESS}/api/products/products/${slug}/reviews/`)
    const reviewList = await response.json()
    setterFunc(reviewList)
  } catch (error) {
    throw error
  }
}

export async function fetchProductsByCategory(category, setterFunc){
  try {
    const response = await fetchWrapper(`${SERVER_ADDRESS}/api/products/category/${category}/`, {
      credentials: 'include'
    });
    const productList = await response.json()
    setterFunc(productList)
  } catch (error) {
    throw error
  }
}