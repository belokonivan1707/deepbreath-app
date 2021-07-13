import React from 'react'
import { useDispatch } from 'react-redux'
import { actionChangeProductRating } from '../../../store/products/actions'
import { actionAddItem } from '../../../store/cart/actions'
import LikeBlack from '../../../assets/product-card/like-black.svg'
import LikeRed from '../../../assets/product-card/like-red.svg'
import ShoppingCart from '../../../assets/product-card/shopping-cart.svg'
import BlackStar from '../../../assets/stars/black-star.svg'
import GoldStar from '../../../assets/stars/gold-star.svg'
import RatingStar from '../../rating-star/rating-star'
import { Wrapper, Image, Info, TagWrapper, Tag, Like, Price, PriceWrapper, Trolly, Title, Box } from './styling'

const ProductCard = ({ product, handleClick, openProductPage }) => {
  const dispatch = useDispatch()
  const { id, imageUrl, title, price, tags, isLiked, rating } = product
  const stars = [1, 2, 3, 4, 5]

  const changeStar = (starId) => {
    dispatch(actionChangeProductRating({ starId, id }))
  }

  return (
    <Wrapper>
      <Like
        onClick={() => handleClick(id)}
        style={isLiked ? { backgroundImage: `url(${LikeRed})` } : { backgroundImage: `url(${LikeBlack})` }}
      />
      <Image style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => openProductPage(id)}>
        <TagWrapper>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagWrapper>
      </Image>
      <Info>
        <Title onClick={() => openProductPage(id)}>{title}</Title>
        <PriceWrapper>
          <Box>
            <Price onClick={() => openProductPage(id)}>$ {price}</Price>
            <Trolly
              style={{ backgroundImage: `url(${ShoppingCart})` }}
              onClick={() => dispatch(actionAddItem(product))}
            />
          </Box>
          <Box>
            {stars.map((star) => (
              <RatingStar key={star} id={star} star={star <= rating ? GoldStar : BlackStar} handleClick={changeStar} />
            ))}
          </Box>
        </PriceWrapper>
      </Info>
    </Wrapper>
  )
}

export default React.memo(ProductCard)
