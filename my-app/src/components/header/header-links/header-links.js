import { useState } from "react";
import { Link } from "react-router-dom";
import { Ul, Li, Arrow } from "./styling";
import ArrowDown from "../../../assets/header/down-arrow.svg";
import ArrowUp from "../../../assets/header/up-arrow.svg";

const HeaderLinks = ({ handleClick }) => {
  const [arrowDown, setArrowDown] = useState(true);
  const [arrowUp, setArrowUp] = useState(true);

  const clickHendler = (e) => {
    if (e.target.id === "1") {
      setArrowDown((prev) => !prev);
    }

    if (e.target.id === "2") {
      setArrowUp((prev) => !prev);
    }

    handleClick(e.target.id);
  };

  return (
    <Ul>
      <Link to="/">
        <Li id="1" onClick={clickHendler}>
          EXPLORE
          {arrowDown ? (
            <Arrow style={{ backgroundImage: `url(${ArrowDown})` }} />
          ) : (
            <Arrow style={{ backgroundImage: `url(${ArrowUp})` }} />
          )}
        </Li>
      </Link>
      <Link to="/">
        <Li id="2" onClick={clickHendler}>
          FOR FOOD MAKERS
          {arrowUp ? (
            <Arrow style={{ backgroundImage: `url(${ArrowDown})` }} />
          ) : (
            <Arrow style={{ backgroundImage: `url(${ArrowUp})` }} />
          )}
        </Li>
      </Link>
    </Ul>
  );
};

export default HeaderLinks;
