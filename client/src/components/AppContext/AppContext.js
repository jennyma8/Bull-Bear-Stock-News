import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";

export const AppContext = createContext(null);

var firebaseConfig = {
  apiKey: "AIzaSyAyoASo9MqvyH_YJNWH4A1iBHwoIP04o0E",
  authDomain: "user-app-a0a0d.firebaseapp.com",
  databaseURL: "https://user-app-a0a0d.firebaseio.com",
  projectId: "user-app-a0a0d",
  storageBucket: "user-app-a0a0d.appspot.com",
  messagingSenderId: "944220933103",
  appId: "1:944220933103:web:d9dfa797cf9671ca8d841a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const db = firebaseApp.database().ref();

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const [message, setMessage] = useState("");
  const [ticker, setTicker] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const handleSignOut = () => {
    signOut();
    setAppUser({});
    setWatchlist([]);
  };

  useEffect(() => {
    if (user) {
      // setAppUser({
      //   displayName: user.displayName,
      //   email: user.email,
      //   photoURL: user.photoURL,
      // });
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setAppUser(json.data);
          setMessage(json.message);
        });
    }
  }, [user]);
  // console.log(user);
  return (
    <AppContext.Provider
      value={{
        appUser,
        signInWithGoogle,
        handleSignOut,
        message,
        ticker,
        setTicker,
        watchlist,
        setWatchlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export default AppProvider;
export default withFirebaseAuth({ providers, firebaseAppAuth })(AppProvider);
