import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import Constants from 'expo-constants';

//firebase config
const config = {
  apiKey: "AIzaSyBO5U0r4dWQj32BI3qEfW6yqVqDh94-2iI",
  authDomain: "esportsapp-329ce.firebaseapp.com",
  projectId: "esportsapp-329ce",
  storageBucket: "esportsapp-329ce.appspot.com",
  messagingSenderId: "1089058578944",
  appId: "1:1089058578944:web:5fd5516a1af51dfff5eee5"
};

// initialize firebase
initializeApp(config);

// initialize auth
const auth = getAuth();

export { auth };



  // apiKey: Constants.manifest.extra.apiKey,
  // authDomain: Constants.manifest.extra.authDomain,
  // projectId: Constants.manifest.extra.projectId,
  // storageBucket: Constants.manifest.extra.storageBucket,
  // messagingSenderId: Constants.manifest.extra.messagingSenderId,
  // appId: Constants.manifest.extra.appId