import { SERVER_ADDRESS } from "./serverConstants";

export async function fetchProductsByUUIDs(uuids, setterFunc) {

  try {
    const response = await fetch(`${SERVER_ADDRESS}api/products/products/list/?uuids=${uuids[0]}`);
    const products = await response.json();
    setterFunc(products)
    return products;
  } catch (error) {
    throw error;
  }
}

export async function fetchProductsBySlugs(slugs, setterFunc) {
  try {
    const response = await fetch(`${SERVER_ADDRESS}api/products/products/list/?slugs=${slugs.join(',')}`);
    const products = await response.json();
    setterFunc(products);
    return products;
  } catch (error) {
    throw error;
  }
}

export async function fetchFullProductBySlug(slug, setterFunc){
  try {
    const response = await fetch(`${SERVER_ADDRESS}api/products/products/info/?slug=${slug}`);
    const product = await response.json()
    setterFunc(product)
  } catch (error) {
    throw error;
  }
}