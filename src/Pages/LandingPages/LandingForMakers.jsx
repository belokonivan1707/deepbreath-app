import Card from '../../assets/landing/box.svg';
import { ComponentLandingRow } from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import Dropdown from '../../components/dropdown/dropdown';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
import { Hero } from '../../components/hero/hero';
// import {
//     dataForLearnMoreItemForMakers,
//     dataForRowsForMakers,
//     sliderDataForMakers,
//     DataForMakers
// } from '../../assets/mokedData/mokedData';
import { Footer } from './../../components/footer/footer';
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
    Section,
} from './styled';
import Header from '../../containers/header-container/header-container';
import { useSelector } from "react-redux";

export function ForMakers() {
    const dataForMakers = useSelector((state) => state.landingsDataStore.dataForMakers);
    return (
        <Main>
            <Header primary={true} />
            <Section>
                <SliderBlock props={dataForMakers.sliderData} />
            </Section>

            <BasketBlock>
                <BasketTitle>
                    {' '}
                    Hungry Hugger is a discovery and booking platform connecting
                    passionate food and drink makers with local food lover’s
                    community.{' '}
                </BasketTitle>
                <BasketText>
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

            {dataForMakers.dataForRows.map((i) => {
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
                    {dataForMakers.dataForLearnMoreItem.map((item) => {
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
            <Footer />
        </Main>
    );
}
