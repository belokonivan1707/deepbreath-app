import { ComponentLandingRow } from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
// import {
//     sliderDataCreateExperience,
//     dataForRowsCreateExperience,
//     dataForLearnMoreItemCreateExperience,
// } from './../../assets/mokedData/mokedData';

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
import Header from './../../containers/header-container/header-container';
import { useSelector } from "react-redux";


export function CreateExperience() {
    const dataForMakers = useSelector((state) => state.landingsDataStore.dataCreateExperience);
    return (
        <>
            <Main>
            <Header primary={true} />
                <SectionSmallerMarginb>
                    <SliderBlock props={dataForMakers.sliderData} />
                </SectionSmallerMarginb>
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
                <TutorialRow>
                    <BtnLeading>Let's start!</BtnLeading>
                </TutorialRow>
                <LearnMore>
                    <TitlTutorial>
                        Learn more about other dedicated food makers
                    </TitlTutorial>
                    <LearnMoreWrapper>
                        {dataForMakers.dataForLearnMoreItem.map((item) => {
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
