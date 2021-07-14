import Slider from 'react-slick'
import { useState } from 'react'
import {
  ImgWrSmall,
  ImgInSlickSliderSmall,
  SlickImgWrappSmall,
  ContainerSmallSlick,
  LeftSide,
  RightSide,
  MakerWrapper,
  SelectPictures,
  PicturesSmallWrapper,
} from '../../Pages/LandingPages/styled'
import './index.css'
import Header from './../../containers/header-container/header-container'
export function MakerPage({ props }) {
  const { info, pictures } = sliderData
  const [stateMainPic, setStateMainPic] = useState(pictures[0].src)

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    // beforeChange: (current, next) => setState({ activeSlide: next }),
  }

  return (
    <>
      <Header />
      <MakerWrapper>
        <LeftSide>
          <PicturesSmallWrapper>
            <SelectPictures src={stateMainPic} />
            <ContainerSmallSlick>
              <Slider {...settings}>
                {pictures.map((item) => {
                  return (
                    <SlickImgWrappSmall key={item.id}>
                      <ImgWrSmall>
                        <ImgInSlickSliderSmall src={item.src} onClick={() => setStateMainPic(item.src)} />
                      </ImgWrSmall>
                    </SlickImgWrappSmall>
                  )
                })}
              </Slider>
            </ContainerSmallSlick>
          </PicturesSmallWrapper>
        </LeftSide>
        <RightSide></RightSide>
      </MakerWrapper>
    </>
  )
}

const sliderData = {
  info: {
    title: 'Get discovered with the right community',
    text: 'Reach a diverse global community of food lovers by running bespoke experiences.',
    textBtn: 'Let’s start!',
  },

  pictures: [
    {
      id: 1,
      src: 'https://dogcentr.ru/wp-content/uploads/2014/05/1161.jpg',
    },
    {
      id: 2,
      src: 'https://petstime.ru/wp-content/uploads/2021/03/haski4.jpg',
    },
    {
      id: 3,
      src: 'https://sobaky.info/wp-content/uploads/2019/10/samye-opasnye.jpg',
    },
  ],
}
