import { Star } from "./styling";

const RatingStar = ({ id, star, handleClick }) => {
  return <Star onClick={() => handleClick(id)} style={{ backgroundImage: `url(${star})` }}></Star>;
};

export default RatingStar;
