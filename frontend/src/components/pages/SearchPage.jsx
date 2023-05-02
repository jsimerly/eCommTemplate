import { useEffect, useContext, useState } from "react"
import { useLocation, } from "react-router-dom"
import { fetchSearch } from "../../api/fetchProducts";
import { BrowsingHistory, ItemSuggestion, ShoppingMain } from "../shopping"
import { ShoppingContext } from '../../context';

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerms = searchParams.get('searchTerms');

    const {selectedDateRange, handleNotification} = useContext(ShoppingContext)
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(()=>{
        const fetchSearchProducts = async () => {
            const response = await fetchSearch(searchTerms, selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
            if (response.ok){
                const resp = await response.json()
                setProducts(resp.products)
                setBrands(resp.brands)
            } else {
                console.log('response not Ok ')
            }
        }
        fetchSearchProducts()
    },[searchTerms])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <div className='flex justify-center items-center text-neutralDark'>
        <div className='max-w-[1280px] w-full px-3 sm:px-0'>
            <h1 className="text-neutralDark py-10 text-[30px]">
                Search Results for "{searchTerms}"
            </h1>
            <ShoppingMain
                filterData={[]}
                relatedCategories={[]}
                products={products}
                brands={brands}                
            />
            <ItemSuggestion/>
            <BrowsingHistory/>
        </div>
    </div>
  )
}

export default SearchPage