import { useLocation } from 'react-router-dom';

function useFetchOnRoute(desiredRoute) {
  const location = useLocation();
  return location.pathname === desiredRoute;
}

export default useFetchOnRoute;