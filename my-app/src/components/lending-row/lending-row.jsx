import { ImgLandingRow,ImgInLandingRow,TitleLandingRow,TextLandingRow,BtnLeading,LandingRow, ParagraphgRow } from '../../Pages/LandingPages/styled';

export const dataForRows = [
    {
        title: 'Boost your online presence with your professional profile',
        text: 'Build a professional profile that highlights your speciality and services for event hire.',
        src: 'https://s.ura.news/images/news/upload/articles/282/508/1036282508/476653_Prezentatsiya_novogo_menyu_v_bare_alibi_Ekaterinburg_blyudo_krvetki_eda_podacha_fudporno_760x0_5289.3526.0.0.jpg',
        revers: '',
        left: 'left',
        textBtn: 'Create profile',
        id:1,
    },
    {
        title: 'List your experience and events where curious food lovers are',
        text: 'Reach new audience with a diverse yet targeted food and drink makers community.',
        src: 'https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg',
        revers: 'revers',
        left: '',
        textBtn: 'Create experience',
        id:2,
    },
    {
        title: 'One place to manage all your products and experiences',
        text: 'Set up a shop to list your products, services and experiences – all in the one place.',
        src: 'https://www.cossa.ru/upload/iblock/550/fruit-2367029_960_720.jpg',
        revers: '',
        left: 'left',
        textBtn: 'Create shop',
        id:3,
    },
];

export function ComponentLandingRow({
    title,
    text,
    src,
    revers,
    left,
    textBtn,
}) {
    return (
        <LandingRow revers={revers}>
            <ImgLandingRow>
                <ImgInLandingRow src={src} />
            </ImgLandingRow>
            <ParagraphgRow left={left}>
                <TitleLandingRow>{title}</TitleLandingRow>
                <TextLandingRow>{text}</TextLandingRow>
                {textBtn ? <BtnLeading>{textBtn}</BtnLeading> : ''}
            </ParagraphgRow>
        </LandingRow>
    );
}
