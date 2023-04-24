import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingContext } from '../context';

const navigateShopping = () => {
    const {selectedCategory, setSelectedCategory} = useContext(ShoppingContext)

    const navigate = useNavigate();

    function handleNav(category){
        const cat = category || selectedCategory

        if (selectedCategory !== cat){
            setSelectedCategory(category)
        }

        navigate(`/shopping`)
    }
    
    return handleNav
}   

export default navigateShopping
