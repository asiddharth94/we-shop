import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import ShopPage from "./components/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubsribeSnapshot;
    const unsubsribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        unsubsribeSnapshot = userRef.onSnapshot((snapshot) => {
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
      unsubsribeSnapshot();
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
