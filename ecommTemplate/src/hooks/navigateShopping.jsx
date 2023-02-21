import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingContext } from '../context';

const navigateShopping = () => {
    const {selectedDateRange, selectedDestination, selectedCategory} = useContext(ShoppingContext)
    const navigate = useNavigate();

    let params = `?destination=${selectedDestination}&startDate=${selectedDateRange.startDate}&endDate=${selectedDateRange.endDate}&categoryId=${selectedCategory.name}&dateChange=${selectedDateRange.first}`

    function handleNav(){
        navigate(`/shopping${params}`)
    }
    return handleNav
}   

export default navigateShopping

// 