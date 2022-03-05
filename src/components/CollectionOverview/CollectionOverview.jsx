import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import "./CollectionOverview.scss";

const CollectionOverview = ({ collectionData }) => {
  return (
    <div className="collection-overview">
      {collectionData.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionData: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
