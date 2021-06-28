import { Star } from "./styling";

const RatingStar = ({ star }) => {
  return <Star style={{ backgroundImage: `url(${star})` }}></Star>;
};

export default RatingStar;
