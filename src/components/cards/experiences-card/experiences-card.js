import LikeBlack from "../../../assets/product-card/like-black.svg";
import LikeRed from "../../../assets/product-card/like-red.svg";
import BlackStar from "../../../assets/stars/black-star.svg";
import GoldStar from "../../../assets/stars/gold-star.svg";
import { Wrapper, Image, Info, TagWrapper, Tag, Like, Price, PriceWrapper, Title, Box } from "./styling";
import RatingStar from "../../rating-star/rating-star";

const ExperiencesCard = ({ maker, handleClick }) => {
  const { id, isLiked, photo, businessTags, name, price, rating } = maker;

  const stars = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <Image style={{ backgroundImage: `url(${photo})` }}>
        {isLiked ? (
          <Like onClick={() => handleClick(id)} style={{ backgroundImage: `url(${LikeRed})` }}/>
        ) : (
          <Like onClick={() => handleClick(id)} style={{ backgroundImage: `url(${LikeBlack})` }}/>
        )}
        <TagWrapper>
          {businessTags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagWrapper>
      </Image>
      <Info>
        <Title>{name}</Title>
        <PriceWrapper>
          <Box>
            <Price>{price}</Price>
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

export default ExperiencesCard;
