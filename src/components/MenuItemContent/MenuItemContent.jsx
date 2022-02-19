import MenuItemName from "../MenuItemName/MenuItemName";
import MenuItemShop from "../MenuItemShop/MenuItemShop";

import "./MenuItemContent.scss";

function MenuItemContent({ menuItemName }) {
  return (
    <div className="menu-item-content">
      <MenuItemName menuItemName={menuItemName} />
      <MenuItemShop />
    </div>
  );
}

export default MenuItemContent;
