import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
const {
  REACT_APP_API_KEY,
   REACT_APP_AUTH_DOMAIN, 
   REACT_APP_PROJECT_ID, 
   REACT_APP_STORAGE_BUCKET,
   REACT_APP_MASSAGING_SENDER_ID,
   REACT_APP_APP_ID
  } = process.env;
firebase.initializeApp({
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MASSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
});
// Initialize Firebase
export const db = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);