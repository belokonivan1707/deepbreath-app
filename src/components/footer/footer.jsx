import {
    FooterContainer,
    SpaceBetween,
    LogoImg,
    OtherLogoImg,
    LogoList,
    FooterInfoItem,
    FooterItemTitle,
    FooterList,
    FooterLink,
} from '../../Pages/LandingPages/styled';
import H from '../../assets/header/h.svg';
import I from '../../assets/landing/i.svg';
import F from '../../assets/landing/f.svg';

export function Footer() {
    return (
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
                        <FooterLink href="/#">Contact</FooterLink>
                    </FooterList>

                    <FooterList>
                        <FooterLink href="/#">
                            {' '}
                            hello@hungryhugger.com{' '}
                        </FooterLink>
                    </FooterList>
                </ul>
                <FooterItemTitle>
                    Join a global community of food lovers and food makers.
                </FooterItemTitle>
            </FooterInfoItem>
            <FooterInfoItem>
                <ul>
                    <FooterList>
                        <FooterLink href="/#">Makers</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">Products</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">Experiences</FooterLink>
                    </FooterList>
                </ul>

                <FooterItemTitle>Explore</FooterItemTitle>
            </FooterInfoItem>
            <FooterInfoItem>
                <ul>
                    <FooterList>
                        <FooterLink href="/#">Blog</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">FAQ</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">Get Hired</FooterLink>
                    </FooterList>
                </ul>
                <FooterItemTitle>Community</FooterItemTitle>
            </FooterInfoItem>
            <FooterInfoItem>
                <ul>
                    <FooterList>
                        <FooterLink href="/#">Terms</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">Privacy Policy</FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink href="/#">Sitemap</FooterLink>
                    </FooterList>
                </ul>
            </FooterInfoItem>
        </FooterContainer>
    );
}
