import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem";
import { selectMenuContainerSections } from "../../redux/menu-container/menu-container.selector";
import "./MenuContainer.scss";

const MenuContainer = ({ sections }) => {
  return (
    <div className="menu-container">
      {sections.map(({ title, imageUrl, id, ...otherSectionInfo }) => (
        <MenuItem
          key={id}
          menuItemName={title}
          menuItemImage={imageUrl}
          {...otherSectionInfo}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuContainerSections,
});

export default connect(mapStateToProps)(MenuContainer);
