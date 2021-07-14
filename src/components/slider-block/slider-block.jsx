// import styled from 'styled-components';
import Slider from 'react-slick';
import {
    StylesDescription,
    TitleDescription,
    TextDescription,
    BtnLeading,
    Container,
    SlickImgWrapp,
    ImgInSlickSlider,
    SlickImgWrappSmall,
    ImgWr,
} from '../../Pages/LandingPages/styled';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
export function SliderBlock({ props }) {
    const { info, pictures } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        // centerPadding: '100px',
    };

    return (
        <>
            <StylesDescription>
                <TitleDescription>{info.title}</TitleDescription>
                <TextDescription>{info.text}</TextDescription>
                <a href="#more">
                    <BtnLeading type="button">{info.textBtn}</BtnLeading>
                </a>
            </StylesDescription>
            <Container>
                <Slider {...settings}>
                    {pictures.map((item) => {
                        return (
                            <SlickImgWrappSmall key={item.id}>
                                <ImgWr>
                                    <ImgInSlickSlider src={item.src} />
                                </ImgWr>
                            </SlickImgWrappSmall>
                        );
                    })}
                </Slider>
            </Container>
        </>
    );
}
