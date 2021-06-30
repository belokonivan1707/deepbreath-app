import { LearnMoreImg,LearnMoreTitle,LearnMoreText,LearnMoreLink } from '../../Pages/LandingPages/styled';

export const dataForLearnMoreItem = [
    {
        id:1,
        title: 'Event hire',
        text: 'Whether you are looking to get hired or building your visibility within a speciality, our platform enables you to be discovered and found easily.',
        src: 'https://vraki.net/sites/default/files/test/1_6.jpg',
        linkText: 'Learn more',
        linkSrc: '#',
    },
    {
        id:2,
        title: 'Classes, workshops, tours and festivals',
        text: 'Besides selling your goodies, many of our passionate food and drinks makers choose to share their passion with cooking classes, tasting workshops, tableware workshops or brewery tours. Our platform helps you to streamline your operations, secure bookings and enable food lovers’ reviews for every experience to boost your sales.',
        src: 'https://3dnews.ru/assets/external/illustrations/2019/05/23/987980/food2.jpg',
        linkText: 'Learn more',
        linkSrc: '#',

    },
    {
        id:3,
        title: 'E-commerce and retail',
        text: 'We understand you are makers at heart. Whether you are making your signature sauce, custom brew, handmade tableware or maker’s gift box that you want to share with your customers. You can set up your own shop and get it up and running quickly.',
        src: 'https://www.cossa.ru/upload/iblock/550/fruit-2367029_960_720.jpg',
        linkText: 'Learn more',
        linkSrc: '#',

    },
];

export function LearnMoreItem({ title, text, src, linkText, linkSrc }) {
    return (
        <>
            <a href={linkSrc}>
                <LearnMoreImg src={src} />
            </a>
            <LearnMoreTitle>{title}</LearnMoreTitle>
            <LearnMoreText>{text}</LearnMoreText>
            <LearnMoreLink href="#">
                {linkText} &gt;
            </LearnMoreLink>
        </>
    );
}
