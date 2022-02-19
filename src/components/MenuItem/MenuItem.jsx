import MenuItemContent from "../MenuItemContent/MenuItemContent";
import "./MenuItem.scss";

function MenuItem({ menuItemName, menuItemImage, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${menuItemImage})` }}
      ></div>
      <MenuItemContent menuItemName={menuItemName} />
    </div>
  );
}

export default MenuItem;
