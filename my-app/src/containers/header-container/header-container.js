import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HSvg from "../../assets/header/h.svg";
import WelcomeSvg from "../../assets/header/welcome.svg";
import HeaderLinks from "../../components/header/header-links/header-links";
import DropdownMenu from "../../components/header/dropdown-menu/dropdown-menu";

import { MainWrap, Wrap, LogoBox, HLogo, WelcomeLogo } from "./styling";

const Header = () => {
  const [hidenMenu, setHidenMenu] = useState(null);
  const [menuSwith, setMenuSwith] = useState();
  const makersMenu = useSelector((state) => state.headerState.menuMakers);
  const menuExplore = useSelector((state) => state.headerState.menuExplore);

  const showMenu = useCallback(
    (id) => {
      if (id === "1") {
        setMenuSwith(menuExplore);
        setHidenMenu((prev) => !prev);
      }

      if (id === "2") {
        setMenuSwith(makersMenu);
        setHidenMenu((prev) => !prev);
      }
    },
    [menuExplore, makersMenu]
  );

  return (
    <MainWrap>
      <Wrap>
        <LogoBox>
          <Link to="/">
            <HLogo style={{ backgroundImage: `url(${HSvg})` }}></HLogo>
          </Link>
          <Link to="/">
            <WelcomeLogo style={{ backgroundImage: `url(${WelcomeSvg})` }}></WelcomeLogo>
          </Link>
        </LogoBox>
        <nav>
          <HeaderLinks handleClick={showMenu} />
        </nav>
      </Wrap>
      <div>{hidenMenu ? <DropdownMenu props={menuSwith} /> : null}</div>
    </MainWrap>
  );
};

export default Header;
