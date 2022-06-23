import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: process.env.API_KEY || process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN || process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID || process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET || process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_ID || process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.ID || process.env.REACT_APP_ID
};
if (!firebase.apps.length) {firebase.initializeApp(firebaseConfig)}
export default firebase;