import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
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
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
