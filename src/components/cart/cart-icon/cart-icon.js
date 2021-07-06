import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../../../assets/product-card/shopping-cart.svg";
import ShoppingCartWhite from "../../../assets/product-card/shopping-cart-white.svg";
import { Wrap, Image, CountBox, Count } from "./styling";

const CartIcon = ({ primary }) => {
  const [itemCount, setItemCount] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setItemCount(cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0));
  }, [cartItems]);

  return (
    <Wrap>
      <Image
        style={primary ? { backgroundImage: `url(${ShoppingCart})` } : { backgroundImage: `url(${ShoppingCartWhite})` }}
      />
      <CountBox>{itemCount ? <Count>{itemCount}</Count> : null}</CountBox>
    </Wrap>
  );
};

export default CartIcon;
