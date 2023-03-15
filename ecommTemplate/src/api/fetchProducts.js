import { SERVER_ADDRESS } from "./serverConstants";

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
  console.log(startDate)
  const start = startDate.toISOString().slice(0,10)
  const end = endDate.toISOString().slice(0,10)
  try {
    const response = await fetch(`${SERVER_ADDRESS}/api/products/products/list/?slugs=${slugs.join(',')}&startDate=${start}&endDate=${end}&dateChange=${dateChange}`);

    const products = await response.json();
    console.log(products)
    setterFunc(products);
    return products;
  } catch (error) {
    throw error;
  }
}

export async function fetchFullProductBySlug(slug, setterFunc){
  try {
    const response = await fetch(`${SERVER_ADDRESS}/api/products/slug/${slug}/`);
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
  try{
    const response = await fetch(`${SERVER_ADDRESS}/api/products/category/${category}`)
    const productList = await response.json()
    setterFunc(productList)
  } catch (error) {
    throw error
  }
}