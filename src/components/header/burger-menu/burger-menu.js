import { BurgerBox, Span } from "./styling";

const BurgerMenu = ({ handleClick }) => {
  return (
    <BurgerBox onClick={handleClick}>
      <Span />
      <Span />
      <Span />
    </BurgerBox>
  );
};

export default BurgerMenu;
