import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartVisibility }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartVisibility: () => dispatch(toggleCartDropdown()),
  };
};
export default connect(null, mapDispatchToProps)(CartIcon);
