import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartVisibility } from "../../redux/cart/cart.selectors";
import "./Header.scss";

const Header = ({ currentUser, cartVisibility }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartVisibility ? <CartDropdown /> : null}
    </div>
  );
};

// First argument to connect, this funtion allows us to access the state(root-reducer to be specific)

// updating with createStructuredSelector - with this, we don't need to pass in the state
// it already has access to it and passes it to selectors implicitly
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartVisibility,
});

export default connect(mapStateToProps)(Header);
