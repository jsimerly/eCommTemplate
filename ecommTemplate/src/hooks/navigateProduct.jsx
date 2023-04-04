import { useNavigate } from "react-router-dom";

const navigateProduct = ({slug}) => {
    const navigate = useNavigate();

    function handleNav(){
        navigate(`/p/${slug}`)
        window.scrollTo(0, 0);
    }
    return handleNav
}   

export default navigateProduct
