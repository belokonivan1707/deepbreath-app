// import styled from 'styled-components';
import Slider from 'react-slick';
import {
    Section,
    StylesDescription,
    TitleDescription,
    TextDescription,
    BtnLeading,
    Container,
    SlickImgWrapp,
    ImgInSlickSlider,
} from '../../Pages/LandingPages/styled';

export function SliderBlock({ props }) {
    const { info, pictures } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Section>
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
                            <SlickImgWrapp key={item.id}>
                                <ImgInSlickSlider src={item.src} />
                            </SlickImgWrapp>
                        );
                    })}
                </Slider>
            </Container>
        </Section>
    );
}
