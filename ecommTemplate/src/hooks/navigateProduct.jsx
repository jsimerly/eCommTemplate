import { useNavigate } from "react-router-dom";

const navigateProduct = ({itemSlug}) => {
    const navigate = useNavigate();

    function handleNav(){
        navigate(`/p/${itemSlug}`)
    }
    return handleNav
}   

export default navigateProduct
