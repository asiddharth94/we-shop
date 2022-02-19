import "./MenuItemName.scss";

function MenuItemName({ menuItemName }) {
  return <h1 className="menu-item-name">{menuItemName.toUpperCase()}</h1>;
}

export default MenuItemName;
