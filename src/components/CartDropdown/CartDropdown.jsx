import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import Button from "../Controls/Button/Button";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          dispatch(toggleCartDropdown());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// If we do not supply the second argument to connect, connect will provide 'dispatch' in our props
// We can use this when we have only one dispatch action

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCartVisibility: () => dispatch(toggleCartDropdown()),
//   };
// };

export default withRouter(connect(mapStateToProps)(CartDropdown));
