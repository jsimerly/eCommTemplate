import { useNavigate } from "react-router-dom";

const navigateCart = () => {
    const navigate = useNavigate()

    function handleNav(){
        navigate('/cart')
    }

  return handleNav
}

export default navigateCart