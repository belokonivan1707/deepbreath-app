import LikeBlack from "../../../assets/product-card/like-black.svg";
import LikeRed from "../../../assets/product-card/like-red.svg";
import ShoppingCart from "../../../assets/product-card/shopping-cart.svg";
import { Wrapper, Image, Info, TagWrapper, Tag, Like, Price, PriceWrapper, Trolly, Title, Box } from "./styling";

const ProductCard = ({ product }) => {
  const { imageUrl, title, price, tags, isLiked, rating } = product;

  return (
    <Wrapper>
      <Image style={{ backgroundImage: `url(${imageUrl})` }}>
        {isLiked ? (
          <Like style={{ backgroundImage: `url(${LikeRed})` }}></Like>
        ) : (
          <Like style={{ backgroundImage: `url(${LikeBlack})` }}></Like>
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

          <div>
            <span>{rating} reiting</span>
          </div>
        </PriceWrapper>
      </Info>
    </Wrapper>
  );
};

export default ProductCard;
