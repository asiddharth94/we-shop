import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
