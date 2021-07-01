// import './style.css';
import Card from '../../assets/landing/box.svg';
import {
    ComponentLandingRow,
    dataForRows,
} from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import Dropdown from '../../components/dropdown/dropdown';
import {
    dataForLearnMoreItem,
    LearnMoreItem,
} from '../../components/learn-more-item/learn-more-item';
import { Hero } from '../../components/hero/hero';
import {
    Main,
    BasketBlock,
    BasketTitle,
    BasketText,
    Wrapper,
    BasketImg,
    MainWrapp,
    TitleDescriptionMiddle,
    TextDescription,
    LearnMore,
    LearnMoreWrapper,
    TitlFaq,
    LearnMoreCard,
    HeroWrapper,
} from './styled';

export const sliderData = {
    info: {
        title: 'Calling on all passionate food and drink makers!',
        text: 'Join the online marketplace connecting passionate food and drink hosts to a global community of food lovers.',
        textBtn: 'Tell me more',
    },

    pictures: [
        {
            id:1,
            src: 'https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-87.jpg',
        },
        {
            id:2,
            src: 'https://aif-s3.aif.ru/images/019/066/ab47449af04fdde2d5adbadaff8fa271.jpg',
        },
        {
            id:3,
            src: 'https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg',
        },
    ],
};

export function ForMakers() {
    return (
        <Main>
            <SliderBlock props={sliderData} />
            <BasketBlock>
                <BasketTitle>
                    {' '}
                    Hungry Hugger is a discovery and booking platform connecting
                    passionate food and drink makers with local food lover’s
                    community.{' '}
                </BasketTitle>

                <BasketText>
                    {' '}
                    We are calling on makers who run unique, authentic, or
                    sustainable businesses to join the community.{' '}
                </BasketText>

                <BasketImg src={Card} alt="bag"></BasketImg>
            </BasketBlock>

            <MainWrapp>
                <TitleDescriptionMiddle>
                    We know how hard you have been working to build your online
                    presence.
                </TitleDescriptionMiddle>
                <TextDescription>
                    Be seen consistently and reach new customers.
                </TextDescription>
            </MainWrapp>

            {dataForRows.map((i) => {
                return (
                    <ComponentLandingRow
                        key={i.id}
                        title={i.title}
                        text={i.text}
                        src={i.src}
                        revers={i.revers}
                        left={i.left}
                        textBtn={i.textBtn}
                    />
                );
            })}

            <LearnMore>
                <LearnMoreWrapper>
                    {dataForLearnMoreItem.map((item) => {
                        return (
                            <LearnMoreCard key={item.id}>
                                <LearnMoreItem
                                    // key={item.id}
                                    title={item.title}
                                    text={item.text}
                                    src={item.src}
                                    linkText={item.linkText}
                                />
                            </LearnMoreCard>
                        );
                    })}
                </LearnMoreWrapper>
            </LearnMore>
            <TitlFaq>Frequently Asked Questions</TitlFaq>
            <Wrapper>
                <Dropdown />
            </Wrapper>
            <HeroWrapper>
                <Hero />
            </HeroWrapper>
        </Main>
    );
}
