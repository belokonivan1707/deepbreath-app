import { useDispatch } from 'react-redux'
import { actionChangeMakersRating } from '../../../store/products-maker/actions'
import GoldStar from '../../../assets/stars/gold-star.svg'
import BlackStar from '../../../assets/stars/black-star.svg'
// import Patrick from '../../../assets/makers/Patrick_Bateman.jpg'
import { Wrap, ImageBox, Image, InfoBox, Box, Avatar, Name, TagBox, Tag, StarsBox } from './styling'
import RatingStar from '../../../components/rating-star/rating-star'

const MakersCard = ({ maker, openMakerPage }) => {
  const dispatch = useDispatch()
  const { id, name, photo, productsImage, businessTags, rating } = maker
  // console.log(photo)
  const stars = [1, 2, 3, 4, 5]

  const changeStar = (starId) => {
    dispatch(actionChangeMakersRating({ starId, id }))
  }

  return (
    <Wrap>
      <ImageBox>
        {productsImage.slice(0, 3).map((image, index) => (
          <Image key={index} style={{ backgroundImage: `url(${image})` }} />
        ))}
      </ImageBox>
      <InfoBox>
        <Avatar style={{ backgroundImage: '' }} onClick={() => openMakerPage(id)}></Avatar>
        <Box onClick={() => openMakerPage(id)}>
          <Name>{name}</Name>
          <TagBox>
            {businessTags.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </TagBox>
        </Box>
        <StarsBox>
          {stars.map((star) =>
            star <= rating ? (
              <RatingStar key={star} id={star} star={GoldStar} handleClick={changeStar} />
            ) : (
              <RatingStar key={star} id={star} star={BlackStar} handleClick={changeStar} />
            )
          )}
        </StarsBox>
      </InfoBox>
    </Wrap>
  )
}

export default MakersCard
