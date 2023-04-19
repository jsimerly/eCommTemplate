import { useNavigate } from "react-router-dom"

const navigateSearch = () => {
    const navigate = useNavigate()

    function handleNav(searchInput){
        console.log(searchInput)
        let searchParam = searchInput.replace(/\s+/g, "+");
        let params = `?searchTerms=${searchParam}`

        navigate(`/search${params}`)
    }

    return handleNav
}

export default navigateSearch