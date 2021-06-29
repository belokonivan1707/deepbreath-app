import styled from 'styled-components';
import { ButtonLandingRow } from './../button-landing-row/button-landing-row';

const ButtonWrapper = styled.button`
color=red;
width=1000px;
`;

export function Hero() {
    return (
        <div className="hero-wrapper">
            <div className="hero-info">
                <p className="title-landing-row">
                    Join a global community of food lovers and food makers
                </p>
                <ButtonLandingRow textBtn={'Join now!'} />
            </div>
        </div>
    );
}
