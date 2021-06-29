import styled from 'styled-components';
import { ButtonLandingRow } from '../button-landing-row/button-landing-row';

export const dataForRows = [
    {
        title: 'Boost your online presence with your professional profile',
        text: 'Build a professional profile that highlights your speciality and services for event hire.',
        src: 'https://s.ura.news/images/news/upload/articles/282/508/1036282508/476653_Prezentatsiya_novogo_menyu_v_bare_alibi_Ekaterinburg_blyudo_krvetki_eda_podacha_fudporno_760x0_5289.3526.0.0.jpg',
        revers: '',
        left: 'left',
        textBtn: 'Create profile',
    },
    {
        title: 'List your experience and events where curious food lovers are',
        text: 'Reach new audience with a diverse yet targeted food and drink makers community.',
        src: 'https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg',
        revers: 'revers',
        left: '',
        textBtn: 'Create experience',
    },
    {
        title: 'One place to manage all your products and experiences',
        text: 'Set up a shop to list your products, services and experiences – all in the one place.',
        src: 'https://www.cossa.ru/upload/iblock/550/fruit-2367029_960_720.jpg',
        revers: '',
        left: 'left',
        textBtn: 'Create shop',
    },
];

export const LandingRow = styled.section`
    max-width: 1008px;
    display: flex;
    flex-direction: ${(props) =>
        props.revers === 'revers' ? 'row-reverse' : 'row'};
    padding: 0;
    margin: auto auto 132px;
`;
export const ParagraphgRow = styled.div`
    width: 50%;
    margin: ${(props) => (props.left === 'left' ? '0 0 0 50px' : '0 50px 0 0')};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;



export function ComponentLandingRow({
    title,
    text,
    src,
    revers,
    left,
    textBtn,
}) {
    console.log(textBtn);
    return (
        <LandingRow revers={revers}>
            <div className="img-landing-row">
                <img src={src} />
            </div>
            <ParagraphgRow left={left}>
                <p className="title-landing-row">{title}</p>
                <p className="text-landing-row">{text}</p>
                {textBtn ? <ButtonLandingRow textBtn={textBtn}/> : ''}
            </ParagraphgRow>
        </LandingRow>
    );
}
