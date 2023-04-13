import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navigateProduct = ({slug}) => {
    const navigate = useNavigate();

    function handleNav(){
        navigate(`/p/${slug}`)
    }

    useEffect(()=> {
        window.scrollTo(0,0)
    },[slug])

    return handleNav
}   

export default navigateProduct
