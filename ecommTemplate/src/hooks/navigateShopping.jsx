import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingContext } from '../context';

const navigateShopping = () => {
    const {
        selectedDateRange, setSelectedDateRange, 
        selectedDestination, setSelectedDestination,
        selectedCategory, setSelectedCategory} = useContext(ShoppingContext)

    const navigate = useNavigate();

    function handleNav(category, destination, startDate, endDate, dateChange){

        const cat = category || selectedCategory
        const dest=selectedDestination || undefined
        const start=selectedDateRange.startDate || undefined
        const end=selectedDateRange.endDate || undefined
        const change=selectedDateRange.first || undefined

        if (selectedCategory.id !== cat.id){
            setSelectedCategory(category)
        }

        let params = `?destination=${dest}&startDate=${start}&endDate=${end}&categoryId=${cat.id}&dateChange=${change}`

        navigate(`/shopping${params}`)
    }
    
    return handleNav
}   

export default navigateShopping
