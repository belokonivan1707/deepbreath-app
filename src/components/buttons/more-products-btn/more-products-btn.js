import { Button } from "./styling";

const MoreProductsButton = ({ handleClick, children }) => {
  return <Button onClick={handleClick}>{children}</Button>;
};

export default MoreProductsButton;
