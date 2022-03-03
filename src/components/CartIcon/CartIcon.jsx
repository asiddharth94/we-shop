import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./CartIcon.scss";

const CartIcon = ({ itemsInCart, toggleCartVisibility }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsInCart: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartVisibility: () => dispatch(toggleCartDropdown()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
