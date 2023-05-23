
import MobileCard from '../cardsAndCarousels/MobileCard';
import ProductCard from '../cardsAndCarousels/ProductCard';
import useWindowSize from '../../hooks/useWindowSize';

const ResponsiveCard = ({ item }) => {
  const { width } = useWindowSize();
  const isMobile = width < 760; 

  const CardComponent = isMobile ? MobileCard : ProductCard;
  return <CardComponent item={item}/>;
};

export default ResponsiveCard;