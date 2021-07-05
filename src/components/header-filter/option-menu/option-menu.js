import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { OptionMenu, List } from "./styling";

const OptionMenuList = ({ onClickOutside, handleClick }) => {
  const clickRef = useRef();
  useClickOutside(clickRef, onClickOutside);

  const menu = ["Products", "Foodmakers", "Experiences"];

  return (
    <OptionMenu ref={clickRef}>
      {menu.map((el) => (
        <List key={el} id={el} onClick={(e) => handleClick(e.target.id)}>
          {el}
        </List>
      ))}
    </OptionMenu>
  );
};

export default OptionMenuList;
