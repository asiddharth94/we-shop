import "./MenuItemContent.scss";

function MenuItemContent({ menuItemName }) {
  return (
    <div className="menu-item-content">
      <h1 className="menu-item-name">{menuItemName.toUpperCase()}</h1>
      <div className="menu-item-shop">SHOP NOW</div>;
    </div>
  );
}

export default MenuItemContent;
