import { ComponentLandingRow } from '../../components/lending-row/lending-row';
import { SliderBlock } from '../../components/slider-block/slider-block';
import Dropdown from '../../components/dropdown/dropdown';
import { LearnMoreItem } from '../../components/learn-more-item/learn-more-item';
import { Hero } from '../../components/hero/hero';
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
    TutorialRow,
    BtnLeading,
    TitlTutorial,
} from './styled';
import Header from '../../containers/header-container/header-container';
import { TutorialItem } from '../../components/tutorial-item/tutorialItem';

export function UniversaLLandingPage({ dataLanding, isDropdown }) {
    return (
        <Main>
            <Header primary={true} />
            {dataLanding.sliderData ? (
                <Section>
                    <SliderBlock props={dataLanding.sliderData} />
                </Section>
            ) : (
                null
            )}
            {dataLanding.basketInfo
                ? dataLanding.basketInfo.map((item) => {
                      return (
                          <BasketBlock key={item.id}>
                              <BasketTitle>{item.title}</BasketTitle>
                              <BasketText>{item.text}</BasketText>
                              <BasketImg src={item.src} alt="bag"></BasketImg>
                          </BasketBlock>
                      );
                  })
                : ''}
            {dataLanding.descriptionData ? (
                <MainWrapp>
                    <TitleDescriptionMiddle>
                        {dataLanding.descriptionData.title}
                    </TitleDescriptionMiddle>
                    <TextDescription>
                        {dataLanding.descriptionData.text}
                    </TextDescription>
                </MainWrapp>
            ) : (
                ''
            )}

            {dataLanding.dataForRows
                ? dataLanding.dataForRows.map((i) => {
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
                  })
                : ''}
            {dataLanding.dataForTutorialItems ? (
                <TutorialRow>
                    <TitlFaq>How it works?</TitlFaq>

                    <LearnMoreWrapper>
                        {dataLanding.dataForTutorialItems.map((i) => {
                            return (
                                <LearnMoreCard key={i.id}>
                                    <TutorialItem text={i.text} src={i.src} />
                                </LearnMoreCard>
                            );
                        })}
                    </LearnMoreWrapper>
                    <BtnLeading>Let's start!</BtnLeading>
                </TutorialRow>
            ) : (
                ''
            )}

            {dataLanding.dataForLearnMoreItem ? (
                <LearnMore>
                    {dataLanding.titleForLearnMoreItem ? (
                        <TitlTutorial>
                            {dataLanding.titleForLearnMoreItem}
                        </TitlTutorial>
                    ) : (
                        ''
                    )}
                    <LearnMoreWrapper>
                        {dataLanding.dataForLearnMoreItem.map((item) => {
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
            ) : (
                ''
            )}
            {isDropdown ? (
                <>
                    <TitlFaq>Frequently Asked Questions</TitlFaq>
                    <Wrapper>
                        <Dropdown />
                    </Wrapper>
                </>
            ) : (
                ''
            )}

            <HeroWrapper>
                <Hero />
            </HeroWrapper>
            <Footer />
        </Main>
    );
}
