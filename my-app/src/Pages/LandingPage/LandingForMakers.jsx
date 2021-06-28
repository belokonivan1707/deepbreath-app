import styled from 'styled-components';
import Slider from 'react-slick';
import './style.css';
import Card from './box.svg';

const Section = styled.section`
    max-width: 1220px;
    margin: 0 auto;
    padding: 50px 112px;
    margin-bottom: 260px;
    display: flex;
`;
export const LandingRow = styled.section`
    max-width: 1008px;
    display: flex;
    flex-direction: ${props => props.revers ? "row-reverse" : "row"};
    padding: 0;
    margin: auto auto 132px;
`
export const ParagraphgRow = styled.div`
    width: 50%;
    margin: ${props => props.left ? '0 0 0 50px' : "0 50px 0 0"};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export function ForMakers() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="main">
            <Section>
                <div class="styles-description">
                    <p class="title-description">
                        Calling on all passionate food and drink makers!
                    </p>
                    <p class="text-description">
                        Join the online marketplace connecting passionate food
                        and drink hosts to a global community of food lovers.
                    </p>
                    <a href="#more">
                        <button href="#more" class="btn-leading" type="button">
                            Tell me more
                        </button>
                    </a>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        <div className="slick-img-wrapp">
                            <img src="https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-87.jpg" />
                        </div>
                        <div className="slick-img-wrapp">
                            <img src="https://aif-s3.aif.ru/images/019/066/ab47449af04fdde2d5adbadaff8fa271.jpg" />
                        </div>
                        <div className="slick-img-wrapp">
                            <img src="https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg" />
                        </div>
                    </Slider>
                </div>
            </Section>

            <section className="basket-block">
                <h2 className="basket-title">
                    {' '}
                    Hungry Hugger is a discovery and booking platform connecting
                    passionate food and drink makers with local food lover’s
                    community.{' '}
                </h2>

                <p className="basket-text">
                    {' '}
                    We are calling on makers who run unique, authentic, or
                    sustainable businesses to join the community.{' '}
                </p>

                <img className="basket-img" src={Card} alt="bag"></img>
            </section>

            <div className="main-wrapp info-wrp">
                <h2 class="title-description title-description-smaller">
                    We know how hard you have been working to build your online
                    presence.
                </h2>
                <h5 className="text-description">
                    Be seen consistently and reach new customers.
                </h5>
            </div>

            <LandingRow>
                <div className="img-landing-row">
                    <img src="https://s.ura.news/images/news/upload/articles/282/508/1036282508/476653_Prezentatsiya_novogo_menyu_v_bare_alibi_Ekaterinburg_blyudo_krvetki_eda_podacha_fudporno_760x0_5289.3526.0.0.jpg" />
                </div>
                <ParagraphgRow left>
                    <p class="title-landing-row">
                        Boost your online presence with your professional
                        profile
                    </p>
                    <p class="text-landing-row">
                        Build a professional profile that highlights your
                        speciality and services for event hire.
                    </p>
                    <a href="#more">
                        <button
                            href="#more"
                            className="btn-leading"
                            type="button"
                        >
                            Create profile
                        </button>
                    </a>
                </ParagraphgRow>
            </LandingRow>
            <LandingRow revers>
                <div className="img-landing-row">
                    <img src="https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg" />
                </div>
                <ParagraphgRow >
                    <p class="title-landing-row">
                    List your experience and events where curious food lovers are
                    </p>
                    <p class="text-landing-row">
                    Reach new audience with a diverse yet targeted food and drink makers community.
                    </p>
                    <a href="#more">
                        <button
                            href="#more"
                            className="btn-leading"
                            type="button"
                        >
                            Create experience
                        </button>
                    </a>
                </ParagraphgRow>
            </LandingRow>
            <LandingRow>
                <div className="img-landing-row">
                    <img src="https://www.cossa.ru/upload/iblock/550/fruit-2367029_960_720.jpg" />
                </div>
                <ParagraphgRow left>
                    <p class="title-landing-row">
                    One place to manage all your products and experiences
                    </p>
                    <p class="text-landing-row">
                    Set up a shop to list your products, services and experiences – all in the one place.
                    </p>
                    <a href="#more">
                        <button
                            href="#more"
                            className="btn-leading"
                            type="button"
                        >
                            Create shop
                        </button>
                    </a>
                </ParagraphgRow>
            </LandingRow>
        </div>
    );
}
