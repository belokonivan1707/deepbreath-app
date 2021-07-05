import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HSvg from "../../assets/header/h.svg";
import HWhiteSvg from "../../assets/header/h-white.svg";
import WelcomeSvg from "../../assets/header/welcome.svg";
import WelcomeWhiteSvg from "../../assets/header/welcome-white.svg";
import { MainWrap, Wrap, LogoBox, HLogo, WelcomeLogo, Nav,Box, A } from "./styling";
import HeaderLinks from "../../components/header/header-links/header-links";
import HeaderOtions from "../../components/header/header-options/header-options";
import DropdownMenu from "../../components/header/dropdown-menu/dropdown-menu";
import BurgerMenu from "../../components/header/burger-menu/burger-menu";
 
const Header = ({ primary }) => {
  const [hidenMenuExplore, setHidenMenuExplore] = useState(null);
  const [hidenMenuMakers, setHidenMenuMakers] = useState(null);
  const [menuSwith, setMenuSwith] = useState();
  const menuExplore = useSelector((state) => state.headerState.menuExplore);
  const makersMenu = useSelector((state) => state.headerState.menuMakers);

  const showMenu = useCallback(
    (id) => {
      if (id === "1") {
        setHidenMenuMakers(null);
        setMenuSwith(menuExplore);
        setHidenMenuExplore((prev) => !prev);
      }

      if (id === "2") {
        setHidenMenuExplore(null);
        setMenuSwith(makersMenu);
        setHidenMenuMakers((prev) => !prev);
      }
    },

    [menuExplore, makersMenu]
  );

  const burgerMenu = () => {
    console.log("fuck");
  };

  return (
    <MainWrap fuck={primary}>
      <Wrap>
        <BurgerMenu handleClick={burgerMenu} />
        <LogoBox>
          <Link to="/">
            <HLogo style={primary ? { backgroundImage: `url(${HSvg})` } : { backgroundImage: `url(${HWhiteSvg})` }} />
          </Link>
          <Link to="/">
            <WelcomeLogo
              style={
                primary ? { backgroundImage: `url(${WelcomeSvg})` } : { backgroundImage: `url(${WelcomeWhiteSvg})` }
              }
            />
          </Link>
        </LogoBox>
        <Box>
          <HeaderLinks handleClick={showMenu} primary={primary} />
        </Box>
        <Nav>
          <HeaderOtions primary={primary} />
        </Nav>
        {primary ? <A primary>SIGN IN</A> : <A>SIGN IN</A>}
      </Wrap>
      <div>
        {hidenMenuExplore ? (
          <DropdownMenu onClickOutside={() => setHidenMenuExplore(null)} props={menuSwith} primary={primary} />
        ) : null}
      </div>
      <div>
        {hidenMenuMakers ? (
          <DropdownMenu onClickOutside={() => setHidenMenuMakers(null)} props={menuSwith} primary={primary} />
        ) : null}
      </div>
    </MainWrap>
  );
};

export default Header;
