import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectShopData } from "../../redux/shop/shop.selector";

const ShopPage = ({ shopData }) => {
  return (
    <div className="shop-page">
      {shopData.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});

export default connect(mapStateToProps)(ShopPage);
