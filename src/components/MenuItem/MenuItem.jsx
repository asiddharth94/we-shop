import { withRouter } from "react-router-dom";

import MenuItemContent from "../MenuItemContent/MenuItemContent";
import "./MenuItem.scss";

function MenuItem({
  menuItemName,
  menuItemImage,
  size,
  linkUrl,
  history,
  match,
}) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${menuItemImage})` }}
      ></div>
      <MenuItemContent menuItemName={menuItemName} />
    </div>
  );
}

export default withRouter(MenuItem);
