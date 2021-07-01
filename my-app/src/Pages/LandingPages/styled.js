import styled from 'styled-components';

export const Main = styled.div`
    background-color: rgb(245, 248, 251);
    margin: 0;
    padding: 0;
    width:100%;
`;
export const BasketBlock = styled.section`
    position: relative;
    background: #fbe4e4;
    border-radius: 16px;
    width: 100%;
    max-width: 800px;
    margin: 150px auto 100px;
    padding: 54px 106px;
`;
export const BasketTitle = styled.h2`
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    color: #31394d;
    margin-bottom: 10px;
`;
export const BasketText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.5px;
    color: #5a6070;
    margin: 0;
`;
export const Wrapper = styled.div`
    width: 100%;
    max-width: 940px;
    background: #fff;
    border-radius: 16px;
    margin: 0 auto 150px;
    padding: 10px 32px 32px;
`;
export const BasketImg = styled.img`
    width: 118px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -112px;
    z-index: 3;
`;
export const MainWrapp = styled.section`
    width: 1000px;
    margin: 0 auto 110px;
    text-align: center;
`;
export const Section = styled.section`
    max-width: 1220px;
    margin: 0 auto;
    padding: 50px 112px;
    margin-bottom: 260px;
    display: flex;
`;
export const SectionSmallerMarginb = styled(Section)`
    margin-bottom: 80px;
`;
export const StylesDescription = styled.div`
    width: 50%;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const TitleDescription = styled.h2`
    max-width: 560px;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #31394d;
    margin-bottom: 24px;
`;
export const TitleLandingRow = styled(TitleDescription)`
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.3px;
`;
export const LearnMoreTitle = styled(TitleDescription)`
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 16px;
    text-align: left;
`;
export const FooterItemTitle = styled(LearnMoreTitle)`
    color: #484f5f;
    margin-bottom:26px;
`;
export const TitlFaq = styled(TitleDescription)`
    max-width: fit-content;
    font-size: 48px;
    margin:0 auto 40px;
`;
export const TitlTutorial = styled(TitlFaq)`
    max-width: 829px;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    letter-spacing: .5px;
    color: #3c3e43;
    margin: 0 auto 48px;
`;

export const TitleDescriptionMiddle = styled(TitleDescription)`
    font-size: 48px;
    max-width: fit-content;
`;
export const TextDescription = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.5px;
    color: #5a6070;
    margin-bottom: 40px;
`;
export const TextLandingRow = styled(TextDescription)`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    margin-bottom: 24px;
`;
export const LearnMoreText = styled(TextDescription)`
    line-height: 160%;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 16px;
`;
export const BtnLeading = styled.button`
    width: 240px;
    height: 56px;
    background: #31394d;
    border-radius: 8px;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    color: #fff;
    border: none;
    cursor: pointer;
`;
export const Container = styled.div`
    display: block;
    width: 50%;
`;
export const SlickImgWrapp = styled.div`
    outline: none;
    border: none;
`;
export const ImgLandingRow = styled.div`
    width: 50%;
    height: 366px;
    border-radius: 20px;
    overflow: hidden;
`;
export const ImgInLandingRow = styled.img`
    height: 100%;
`;
export const ImgInSlickSlider = styled.img`
    margin: auto;
    border-radius: 20px;
    width: 588px;
    height: 420px;
    width: 96%;
`;

export const LearnMore = styled.section`
    background: #fff;
    border-radius: 16px;
    padding: 64px 73px 110px;
    position: relative;
    margin: 0 auto 98px;
    max-width: 1075px;
`;
export const LearnMoreWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const HeroWrapper = styled.div`
    background-image: url(https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    max-width: 1440px;
    height: 502px;
    margin: 0 auto 72px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const HeroInfo = styled.div`
    width: 380px;
    min-height: 214px;
    background: rgb(255, 255, 255);
    border-radius: 16px;
    padding: 40px;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.3px;
    color: #333;
    margin-left: 115px;
`;
export const LearnMoreImg = styled.img`
    width: 100%;
    height: 203px;
    margin-bottom: 20px;
    border-radius: 15px;
`;
export const LearnMoreLink = styled.a`
    display: block;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #4099ec;
    margin-top: 8px;
    text-decoration: none;
`;
export const ButtonWrapper = styled(BtnLeading)`
    width: 100%;
`;
export const LearnMoreCard = styled.div`
    width: 30%;
`;
export const LandingRow = styled.section`
    max-width: 1008px;
    display: flex;
    flex-direction: ${(props) =>
        props.revers === 'revers' ? 'row-reverse' : 'row'};
    padding: 0;
    margin: auto auto 132px;
`;
export const TutorialRow = styled(LandingRow)`
    
    flex-direction: column;
    display: flex;
    margin:0 auto 150px;
    align-items: center
`;
export const ParagraphgRow = styled.div`
    width: 50%;
    margin: ${(props) => (props.left === 'left' ? '0 0 0 50px' : '0 50px 0 0')};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const TutorialItemPicWrap = styled.div`
    width: 100%;
    max-width: 290px;
    height: 221px;
    border-radius: 16px;
    background: #fff;
    display: flex;
    justify-content: center;
    margin-bottom: 44px;
    align-items: center;
`;
export const FooterContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 50px 50px;
    display: flex;
    flex-wrap: wrap;
    background: #f5f8fb;
    margin-top:120px;
`;
export const SpaceBetween = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;

    padding: 32px;
    margin-bottom: 32px;
}
`;
export const LogoImg = styled.img`
    width:70px;
    height: 45px;
    color: #31394d;
`;
export const OtherLogoImg = styled.img`
    width:30px;
    height: 30px;
    color: #31394d;
    margin-right:25px;
`;
export const LogoList = styled.ul`
    display:flex;
`;
export const FooterList = styled.li`
    list-style: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: .5px;
    color: #31394d;
    margin-bottom: 8px;
    cursor: pointer;
    display:flex;
    flex-direction:column;
`;
export const FooterInfoItem = styled.div`
    max-width: 310px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 0 34px;
    margin-bottom: 32px;
`;