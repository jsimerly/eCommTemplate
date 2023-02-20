import { useNavigate } from "react-router-dom";


const navigateShopping = ({where, startDate, endDate, category}) => {
    const navigate = useNavigate();
    const params = {where: where, startDate: startDate, endDate: endDate, category: category}

    navigate('/shopping/:where/:startDate/:endDate/:category')
}   

export default navigateShopping