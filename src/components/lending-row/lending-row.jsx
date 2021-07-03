import {
    ImgLandingRow,
    ImgInLandingRow,
    TitleLandingRow,
    TextLandingRow,
    BtnLeading,
    LandingRow,
    ParagraphgRow,
} from '../../Pages/LandingPages/styled';


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
                {/* <TextLandingRow>{text}</TextLandingRow> */}
                {text.split('\n').map((t) => (
                    <TextLandingRow>{t}</TextLandingRow>
                ))}
                {textBtn ? <BtnLeading>{textBtn}</BtnLeading> : ''}
            </ParagraphgRow>
        </LandingRow>
    );
}
