import { connect } from "react-redux";

import { clearItem } from "../../redux/cart/cart.actions";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item, clearItem }) => {
  return (
    <div className="checkout-item">
      {/* reason for using a container for image is 
      because it's easier to control the size of the section that holds the image */}
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name} </span>
      <span className="quantity">{item.quantity} </span>
      <span className="price">{item.price} </span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
