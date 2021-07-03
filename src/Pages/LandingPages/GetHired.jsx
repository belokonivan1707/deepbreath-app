import {
    ComponentLandingRow,
} from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
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
import {Footer} from '../../components/footer/footer'
import Header from './../../containers/header-container/header-container';
import { useSelector } from "react-redux";


export function GetHired() {
    const dataGetHired = useSelector((state) => state.landingsDataStore.dataGetHired);
    return (
        <>
            <Main>
            <Header primary={true} />
                <SectionSmallerMarginb>
                    <SliderBlock props={dataGetHired.sliderData} />
                </SectionSmallerMarginb>
                {dataGetHired.dataForRows.map((i) => {
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
                        {dataGetHired.dataForTutorialItems.map((i) => {
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
                        {dataGetHired.dataForLearnMoreItem.map((item) => {
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
