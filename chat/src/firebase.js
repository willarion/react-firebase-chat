import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjaUYlO1FNOdvkN8e2oSwjhdUqoFX6deA",
  authDomain: "willarion-chat.firebaseapp.com",
  projectId: "willarion-chat",
  storageBucket: "willarion-chat.appspot.com",
  messagingSenderId: "862371563050",
  appId: "1:862371563050:web:3b9e1c9360fae08f78a553",
  measurementId: "G-VFZX5KCLTE",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
