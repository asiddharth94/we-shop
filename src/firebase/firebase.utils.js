import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCqxg5q-hEymMIm35wyL--N8A2BCjhv07w",
  authDomain: "we-shop-b655f.firebaseapp.com",
  projectId: "we-shop-b655f",
  storageBucket: "we-shop-b655f.appspot.com",
  messagingSenderId: "328875218262",
  appId: "1:328875218262:web:d50d6218254c706a3532f7",
  measurementId: "G-DB32SJQGCY",
};

firebase.initializeApp(config);

// export const auth = firebase.auth();

export const auth = getAuth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
