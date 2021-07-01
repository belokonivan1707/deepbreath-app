import { useState } from "react";
import { Link } from "react-router-dom";
import { Ul, Li, Arrow } from "./styling";
import ArrowDown from "../../../assets/header/down-arrow.svg";
import ArrowDownWhite from "../../../assets/header/down-arrow-white.svg";
import ArrowUp from "../../../assets/header/up-arrow.svg";
import ArrowUpWhite from "../../../assets/header/up-arrow-white.svg";

const HeaderLinks = ({ handleClick, primary }) => {
  const [arrowOne, setArrowOne] = useState(null);
  const [arrowTwo, setArrowTwo] = useState(null);

  const clickHendler = (e) => {
    if (e.target.id === "1") {
      setArrowTwo(null);
      setArrowOne((prev) => !prev);
    }

    if (e.target.id === "2") {
      setArrowOne(null);
      setArrowTwo((prev) => !prev);
    }

    handleClick(e.target.id);
  };

  return (
    <Ul>
      <Link to="/">
        {primary ? (
          <Li id="1" onClick={clickHendler} primary>
            EXPLORE
            {arrowOne ? (
              <Arrow
                style={primary ? { backgroundImage: `url(${ArrowUp})` } : { backgroundImage: `url(${ArrowUpWhite})` }}
              />
            ) : (
              <Arrow
                style={
                  primary ? { backgroundImage: `url(${ArrowDown})` } : { backgroundImage: `url(${ArrowDownWhite})` }
                }
              />
            )}
          </Li>
        ) : (
          <Li id="1" onClick={clickHendler}>
            EXPLORE
            {arrowOne ? (
              <Arrow
                style={primary ? { backgroundImage: `url(${ArrowUp})` } : { backgroundImage: `url(${ArrowUpWhite})` }}
              />
            ) : (
              <Arrow
                style={
                  primary ? { backgroundImage: `url(${ArrowDown})` } : { backgroundImage: `url(${ArrowDownWhite})` }
                }
              />
            )}
          </Li>
        )}
      </Link>
      <Link to="/">
        {primary ? (
          <Li id="2" onClick={clickHendler} primary>
            FOR FOOD MAKERS
            {arrowTwo ? (
              <Arrow
                style={primary ? { backgroundImage: `url(${ArrowUp})` } : { backgroundImage: `url(${ArrowUpWhite})` }}
              />
            ) : (
              <Arrow
                style={
                  primary ? { backgroundImage: `url(${ArrowDown})` } : { backgroundImage: `url(${ArrowDownWhite})` }
                }
              />
            )}
          </Li>
        ) : (
          <Li id="2" onClick={clickHendler}>
            FOR FOOD MAKERS
            {arrowTwo ? (
              <Arrow
                style={primary ? { backgroundImage: `url(${ArrowUp})` } : { backgroundImage: `url(${ArrowUpWhite})` }}
              />
            ) : (
              <Arrow
                style={
                  primary ? { backgroundImage: `url(${ArrowDown})` } : { backgroundImage: `url(${ArrowDownWhite})` }
                }
              />
            )}
          </Li>
        )}
      </Link>
    </Ul>
  );
};

export default HeaderLinks;
