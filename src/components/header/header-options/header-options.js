import { Link } from "react-router-dom";
import Search from "../../../assets/header/search.svg";
import SearchWhite from "../../../assets/header/search-white.svg";
import Email from "../../../assets/header/email.svg";
import EmailWhite from "../../../assets/header/email-white.svg";
import ShoppingCart from "../../../assets/product-card/shopping-cart.svg";
import ShoppingCartWhite from "../../../assets/product-card/shopping-cart-white.svg";

import { Ul, Li, Mail } from "./styling";

const HeaderOtions = ({ primary }) => {
  return (
    <Ul>
      <Link to="/">
        {primary ? (
          <Li style={{ backgroundImage: `url(${Search})` }} />
        ) : (
          <Li style={{ backgroundImage: `url(${SearchWhite})` }} />
        )}
      </Link>
      <Link to="/">
        {primary ? (
          <Mail style={{ backgroundImage: `url(${Email})` }} />
        ) : (
          <Mail style={{ backgroundImage: `url(${EmailWhite})` }} />
        )}
      </Link>
      <Link to="/">
        {primary ? (
          <Li style={{ backgroundImage: `url(${ShoppingCart})` }} />
        ) : (
          <Li style={{ backgroundImage: `url(${ShoppingCartWhite})` }} />
        )}
      </Link>
    </Ul>
  );
};

export default HeaderOtions;
