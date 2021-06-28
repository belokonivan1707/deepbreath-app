import LikeBlack from "../../../assets/product-card/like-black.svg";
import LikeRed from "../../../assets/product-card/like-red.svg";
import ShoppingCart from "../../../assets/product-card/shopping-cart.svg";
import BlackStar from "../../../assets/stars/black-star.svg";
import GoldStar from "../../../assets/stars/gold-star.svg";
import { Wrapper, Image, Info, TagWrapper, Tag, Like, Price, PriceWrapper, Trolly, Title, Box } from "./styling";
import RatingStar from "../../rating-star/rating-star";

const ProductCard = ({ product, handleClick }) => {
  const { id, imageUrl, title, price, tags, isLiked, rating } = product;

  const stars = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <Image style={{ backgroundImage: `url(${imageUrl})` }}>
        {isLiked ? (
          <Like onClick={() => handleClick(id)} style={{ backgroundImage: `url(${LikeRed})` }}></Like>
        ) : (
          <Like onClick={() => handleClick(id)} style={{ backgroundImage: `url(${LikeBlack})` }}></Like>
        )}
        <TagWrapper>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagWrapper>
      </Image>
      <Info>
        <Title>{title}</Title>
        <PriceWrapper>
          <Box>
            <Price>$ {price}</Price>
            <Trolly style={{ backgroundImage: `url(${ShoppingCart})` }} />
          </Box>
          <Box>
            {stars.map((star) =>
              star <= rating ? <RatingStar key={star} star={GoldStar} /> : <RatingStar key={star} star={BlackStar} />
            )}
          </Box>
        </PriceWrapper>
      </Info>
    </Wrapper>
  );
};

export default ProductCard;
