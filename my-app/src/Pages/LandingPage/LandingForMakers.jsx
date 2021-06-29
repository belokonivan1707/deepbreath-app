import './style.css';
import Card from './box.svg';
import {
    ComponentLandingRow,
    dataForRows,
} from './components/lending-row/lending-row';
import { SliderBlock } from './components/slider-block/slider-block';
import Dropdown from './../../components/dropdown/dropdown';
import styled from 'styled-components';
import {
    dataForLearnMoreItem,
    LearnMoreItem,
} from './components/learn-more-item/learn-more-item';
import { Hero } from './components/hero/hero';

export const sliderData = {
    info: {
        title: 'Calling on all passionate food and drink makers!',
        text: 'Join the online marketplace connecting passionate food and drink hosts to a global community of food lovers.',
        textBtn: 'Tell me more',
    },

    pictures: [
        {
            src: 'https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-87.jpg',
        },
        {
            src: 'https://aif-s3.aif.ru/images/019/066/ab47449af04fdde2d5adbadaff8fa271.jpg',
        },
        {
            src: 'https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg',
        },
    ],
};
export const Wrapper = styled.div`
    width: 100%;
    max-width: 940px;
    background: #fff;
    border-radius: 16px;
    margin: 0 auto 150px;
    padding: 10px 32px 32px;
`;

export function ForMakers() {
    return (
        <div className="main">
            <SliderBlock props={sliderData} />
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

            <section className="main-wrapp info-wrp">
                <h2 className="title-description title-description-smaller">
                    We know how hard you have been working to build your online
                    presence.
                </h2>
                <h5 className="text-description">
                    Be seen consistently and reach new customers.
                </h5>
            </section>

            {dataForRows.map((i) => {
                return (
                    <ComponentLandingRow
                        title={i.title}
                        text={i.text}
                        src={i.src}
                        revers={i.revers}
                        left={i.left}
                        textBtn={i.textBtn}
                    />
                );
            })}

            <section className="learn-more">
                <div className="learn-more-wrapper">
                    {dataForLearnMoreItem.map((item) => {
                        return (
                            <div className="learn-more__card">
                                <LearnMoreItem
                                    title={item.title}
                                    text={item.text}
                                    src={item.src}
                                    linkText={item.linkText}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
            <p class="faq-title">Frequently Asked Questions</p>
            <Wrapper>
                <Dropdown />
            </Wrapper>

            <Hero/>
        </div>
    );
}
