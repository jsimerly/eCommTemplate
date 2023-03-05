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
        const dest = destination || selectedDestination 
        const start = startDate || selectedDateRange.startDate 
        const end = endDate || selectedDateRange.endDate
        const change = dateChange || selectedDateRange.first

        if (selectedCategory.id !== cat.id){
            setSelectedCategory(category)
        }

        let params = `?destination=${dest}&startDate=${start}&endDate=${end}&categoryId=${cat.id}&dateChange=${change}`

        navigate(`/shopping${params}`)
    }
    
    return handleNav
}   

export default navigateShopping
