import { TextLandingRow } from '../../Pages/LandingPages/styled';
import { TutorialItemPicWrap, } from './../../Pages/LandingPages/styled';


export function TutorialItem({ text, src }) {
    return (
        <>
            <TutorialItemPicWrap>
                <img src={src} alt="bag"></img>
            </TutorialItemPicWrap>
            <TextLandingRow>{text}</TextLandingRow>
        </>
    );
}
