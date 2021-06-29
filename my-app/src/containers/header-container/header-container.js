import { useState } from "react";
import { Link } from "react-router-dom";
import HSvg from "../../assets/header/h.svg";
import WelcomeSvg from "../../assets/header/welcome.svg";
import ArrowDown from "../../assets/header/down-arrow.svg";
import ArrowUp from "../../assets/header/up-arrow.svg";
// import CheersSvg from "../../assets/header/cheers.svg";
import { Wrap, LogoBox, HLogo, WelcomeLogo, Ul, Li, Arrow } from "./styling";

const Header = () => {
  const [arrowDown, setArrowDown] = useState(true);
  const [arrowUp, setArrowUp] = useState(true);

  return (
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
        <Ul>
          <Link to="/">
            <Li onClick={() => setArrowDown(arrowDown ? false : true)}>
              EXPLORE
              {arrowDown ? (
                <Arrow style={{ backgroundImage: `url(${ArrowDown})` }} />
              ) : (
                <Arrow style={{ backgroundImage: `url(${ArrowUp})` }} />
              )}
            </Li>
          </Link>
          <Link to="/">
            <Li onClick={() => setArrowUp(arrowUp ? false : true)}>
              FOR FOOD MAKERS
              {arrowUp ? (
                <Arrow style={{ backgroundImage: `url(${ArrowDown})` }} />
              ) : (
                <Arrow style={{ backgroundImage: `url(${ArrowUp})` }} />
              )}
            </Li>
          </Link>
        </Ul>
      </nav>
    </Wrap>
  );
};

export default Header;
