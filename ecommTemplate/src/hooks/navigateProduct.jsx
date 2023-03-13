import { useNavigate } from "react-router-dom";

const navigateProduct = ({slug}) => {
    const navigate = useNavigate();

    function handleNav(){
        navigate(`/p/${slug}`)
    }
    return handleNav
}   

export default navigateProduct
