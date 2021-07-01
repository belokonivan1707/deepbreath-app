import Card from '../../assets/landing/box.svg';
import {
    ComponentLandingRow,
    dataForRows,
} from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import Dropdown from '../../components/dropdown/dropdown';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
import {
    sliderDataGetHired,
    dataForRowsGetHired,
    dataForTutorialItemsGetHired,
    dataForLearnMoreItemGetHired,
} from './../../assets/mokedData/mokedData';

import {
    Main,
    LearnMore,
    LearnMoreWrapper,
    TitlFaq,
    LearnMoreCard,
    HeroWrapper,
    SectionSmallerMarginb,
    TutorialRow,
    BtnLeading,
    TitlTutorial,
} from './styled';
import { TutorialItem } from '../../components/tutorial-item/tutorialItem';
import { Hero } from '../../components/hero/hero';
// import {Footer} from '../../components/footer/footer'
import {Footer} from '../../components/footer/footer'

export function GetHired() {
    return (
        <>
            <Main>
                <SectionSmallerMarginb>
                    <SliderBlock props={sliderDataGetHired} />
                </SectionSmallerMarginb>
                {dataForRowsGetHired.map((i) => {
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
                <TitlFaq>How it works?</TitlFaq>

                    <LearnMoreWrapper>
                        {dataForTutorialItemsGetHired.map((i) => {
                            return (
                                <LearnMoreCard key={i.id}>
                                    <TutorialItem text={i.text} src={i.src} />
                                </LearnMoreCard>
                            );
                        })}
                    </LearnMoreWrapper>
                    <BtnLeading>Let's start!</BtnLeading>
                </TutorialRow>
                <LearnMore>
                    <TitlTutorial>
                        Learn more about other dedicated food makers
                    </TitlTutorial>
                    <LearnMoreWrapper>
                        {dataForLearnMoreItemGetHired.map((item) => {
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
                <Footer/>
                </Main>
        </>
    );
}
