import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubsribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubsribeAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
