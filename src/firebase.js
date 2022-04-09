import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKmNnYQwpfIdyC0aXMvTkPmOk6-0WIYCo",
  authDomain: "clone-manoj.firebaseapp.com",
  projectId: "clone-manoj",
  storageBucket: "clone-manoj.appspot.com",
  messagingSenderId: "603648413348",
  appId: "1:603648413348:web:d500a356d57ef4091b2031",
  measurementId: "G-YSMMZJRD3H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
