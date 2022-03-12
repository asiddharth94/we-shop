import { useEffect, useState } from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import withSpinner from "../withSpinner/withSpinner";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

// we have access to {match, history, location} because this comp is wrapped under Route
const ShopPage = ({ match, dispatch, isLoading }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(updateCollections(collectionsMap));
        setLoading(false);
      }
    );

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default connect(null)(ShopPage);
