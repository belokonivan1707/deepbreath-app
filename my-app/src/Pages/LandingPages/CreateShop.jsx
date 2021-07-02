import { ComponentLandingRow } from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
import {
    sliderDataCreateShop,
    dataForRowsCreateShop,
    dataForLearnMoreItemCreateShop,
} from './../../assets/mokedData/mokedData';

import {
    Main,
    LearnMore,
    LearnMoreWrapper,
    LearnMoreCard,
    HeroWrapper,
    SectionSmallerMarginb,
    TutorialRow,
    BtnLeading,
    TitlTutorial,
} from './styled';
import { Hero } from '../../components/hero/hero';
import { Footer } from '../../components/footer/footer';

export function CreateShop() {
    return (
        <>
            <Main>
                <SectionSmallerMarginb>
                    <SliderBlock props={sliderDataCreateShop} />
                </SectionSmallerMarginb>
                {dataForRowsCreateShop.map((i) => {
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
                <TutorialRow>
                    <BtnLeading>Let's start!</BtnLeading>
                </TutorialRow>
                <LearnMore>
                    <TitlTutorial>
                        Learn more about other dedicated food makers
                    </TitlTutorial>
                    <LearnMoreWrapper>
                        {dataForLearnMoreItemCreateShop.map((item) => {
                            return (
                                <LearnMoreCard key={item.id}>
                                    <LearnMoreItem
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
                <HeroWrapper>
                    <Hero />
                </HeroWrapper>
                <Footer />
            </Main>
        </>
    );
}
