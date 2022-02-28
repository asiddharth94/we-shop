import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
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
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
