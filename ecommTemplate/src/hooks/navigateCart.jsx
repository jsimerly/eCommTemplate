import { useNavigate } from "react-router-dom";

const navigateCart = () => {
    const navigate = useNavigate()

    function handleNav(){
        navigate('/cart')
        window.scrollTo(0, 0);
    }

  return handleNav
}

export default navigateCart