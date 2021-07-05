
import {
    FooterContainer,
    SpaceBetween,
    LogoImg,
    OtherLogoImg,
    LogoList,
    FooterInfoItem,
    FooterItemTitle,
    FooterList,
} from '../../Pages/LandingPages/styled';
import H from '../../assets/header/h.svg';
import I from '../../assets/landing/i.svg';
import F from '../../assets/landing/f.svg';

export function Footer(){
    return(
        <FooterContainer>
                    <SpaceBetween>
                        <a href="/#">
                            <LogoImg src={H} alt="bag"></LogoImg>
                        </a>
                        <LogoList>
                            <li>
                                <a href="/#">
                                    <OtherLogoImg src={I} />
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <OtherLogoImg src={F} />
                                </a>
                            </li>
                        </LogoList>
                    </SpaceBetween>
                    <FooterInfoItem>
                        <ul>
                            <FooterList>
                                <a href="/#">Contact</a>
                            </FooterList>
                            
                            <FooterList><a href="/#">hello@hungryhugger.com</a></FooterList>
                        </ul>
                        <FooterItemTitle>
                            Join a global community of food lovers and food
                            makers.
                        </FooterItemTitle>

                    </FooterInfoItem>
                    <FooterInfoItem>
                        <ul>
                            <FooterList>
                                <a href="/#">Makers</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">Products</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">Experiences</a>
                            </FooterList>
                        </ul>

                        <FooterItemTitle>Explore</FooterItemTitle>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <ul>
                            <FooterList>
                                <a href="/#">Blog</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">FAQ</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">Get Hired</a>
                            </FooterList>
                        </ul>
                        <FooterItemTitle>Community</FooterItemTitle>

                    </FooterInfoItem>
                    <FooterInfoItem>
                        <ul>
                            <FooterList>
                                <a href="/#">Terms</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">Privacy Policy</a>
                            </FooterList>
                            <FooterList>
                                <a href="/#">Sitemap</a>
                            </FooterList>
                        </ul>
                    </FooterInfoItem>
                </FooterContainer>
            
    )
}

