import { Link } from "react-router-dom";
import Search from "../../../assets/header/search.svg";
import SearchWhite from "../../../assets/header/search-white.svg";
import Email from "../../../assets/header/email.svg";
import EmailWhite from "../../../assets/header/email-white.svg";
import CartIcon from "../../cart/cart-icon/cart-icon";

import { Ul, Li, Mail } from "./styling";

const HeaderOtions = ({ primary }) => {
  return (
    <Ul>
      <Link to="/">
        {<Li style={primary ? { backgroundImage: `url(${Search})` } : { backgroundImage: `url(${SearchWhite})` }} />}
      </Link>
      <Link to="/">
        {<Mail style={primary ? { backgroundImage: `url(${Email})` } : { backgroundImage: `url(${EmailWhite})` }} />}
      </Link>
      <Link to="/cart">
        <CartIcon primary={primary} />
      </Link>
    </Ul>
  );
};

export default HeaderOtions;
