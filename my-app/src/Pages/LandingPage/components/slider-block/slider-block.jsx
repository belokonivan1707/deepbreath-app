import styled from 'styled-components';
import Slider from 'react-slick';

export function SliderBlock( {props} ) {
    const{info, pictures} = props
    console.log(info, pictures);
    const Section = styled.section`
        max-width: 1220px;
        margin: 0 auto;
        padding: 50px 112px;
        margin-bottom: 260px;
        display: flex;
    `;

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
            <div className="styles-description">
                <p className="title-description">{info.title}</p>
                <p className="text-description">{info.text}</p>
                <a href="#more">
                    <button href="#more" class="btn-leading" type="button">
                        {info.textBtn}
                    </button>
                </a>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {pictures.map(item=>{
                        return (
                            <div className="slick-img-wrapp">
                            <img src={item.src} />
                            </div>)
                    })}
                </Slider>
            </div>
        </Section>
    );
}