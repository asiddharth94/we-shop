import "./CollectionItem.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-item-footer">
        <span className="name">{name}</span>

        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;