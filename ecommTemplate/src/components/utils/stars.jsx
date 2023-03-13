import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const Stars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);

  const starArray = [];
  for (let i = 0; i < fullStars; i++) {
    starArray.push(<StarIcon key={i} />);
  }
  if (halfStars === 1) {
    starArray.push(<StarHalfIcon key={fullStars} />);
  }
  const remainingStars = 5 - fullStars - halfStars;
  for (let i = 0; i < remainingStars; i++) {
    starArray.push(<StarOutlineIcon key={i + fullStars + halfStars} />);
  }

  return (
    <>
      {starArray}
    </>
  );
};
