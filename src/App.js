import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
