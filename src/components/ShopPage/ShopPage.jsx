import { Route } from "react-router-dom";

import CollectionOverview from "../CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

// we have access to {match, history, location} because this comp is wrapped under Route
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
