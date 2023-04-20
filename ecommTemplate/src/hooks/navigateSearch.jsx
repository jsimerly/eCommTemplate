import { useNavigate } from "react-router-dom";

const navigateSearch = () => {
  const navigate = useNavigate();

  function handleNav(searchInput) {
    let searchParam = searchInput.replace(/\s+/g, "+");
    let params = `?searchTerms=${searchParam}`;

    navigate(`/search/${params}`); // navigate to search page with the search terms as query params
  }

  return handleNav;
};

export default navigateSearch;