import { LearnMoreImg,LearnMoreTitle,LearnMoreText,LearnMoreLink } from '../../Pages/LandingPages/styled';



export function LearnMoreItem({ title, text, src, linkText, linkSrc }) {
    return (
        <>
            <a href={`${linkSrc}`}>
                <LearnMoreImg src={src} />
            </a>
            <LearnMoreTitle>{title}</LearnMoreTitle>
            <LearnMoreText>{text}</LearnMoreText>
            <LearnMoreLink href={`${linkSrc}`}>
                {linkText} &gt;
            </LearnMoreLink>
        </>
    );
}
