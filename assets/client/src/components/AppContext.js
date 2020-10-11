import React, { createContext, useEffect, useState } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD9-E5zrdd31sYCUFImJlYKcFekOYSfzRk',
  authDomain: 'user-app-79e3c.firebaseapp.com',
  databaseURL: 'https://user-app-79e3c.firebaseio.com',
  projectId: 'user-app-79e3c',
  storageBucket: 'user-app-79e3c.appspot.com',
  messagingSenderId: '849093390522',
  appId: '1:849093390522:web:55ab1d7d6e2da7b0961283',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export const AppContext = createContext(null);

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  const [message, setMessage] = useState('');
  const handleSignOut = () => {
    signOut();
    setAppUser({});
    setMessage('');
  };

  useEffect(() => {
    if (user) {
      fetch(`/users`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
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

  return (
    <AppContext.Provider
      value={{ appUser, signInWithGoogle, handleSignOut, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  firebaseApp,
})(AppProvider);
