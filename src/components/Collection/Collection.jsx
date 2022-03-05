import { connect } from "react-redux";

import CollectionItem from "../CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selector";
import "./Collection.scss";

// we have access to {match, history, location} because this comp is wrapped under Route
const Collection = ({ collection }) => {
  return (
    <div className="collection">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// second arg to mapStateToProps is 'ownProps', i.e, props of the component
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(Collection);
