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
import { sliderDataGetHired, dataForRowsGetHired } from './../../assets/mokedData/mokedData';

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
    SectionSmallerMarginb,
    LandingRow,
} from './styled';


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
                <TitlFaq>How it works?</TitlFaq>
                
                <LandingRow>
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
                </LandingRow>
                
            
            </Main>
        </>
    );
}
