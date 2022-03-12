import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionForPreview } from "./redux/shop/shop.selector";
import "./App.css";

function App({ setCurrentUser, currentUser, collectionsArray }) {
  useEffect(() => {
    addCollectionAndDocuments(
      "collections",
      collectionsArray.map(({ title, items }) => ({ title, items }))
    );
  }, []);

  useEffect(() => {
    // handle authentication based on user log-in or log-out
    const unsubsribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    // clean-up
    return () => {
      unsubsribeAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    collectionsArray: selectCollectionForPreview(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
