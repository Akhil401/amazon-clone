import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiLaGsUe_VYMle0i4mUUAAx8vtwRTJa-U",
  authDomain: "clone-5b3ec.firebaseapp.com",
  projectId: "clone-5b3ec",
  storageBucket: "clone-5b3ec.appspot.com",
  messagingSenderId: "261757383600",
  appId: "1:261757383600:web:cb6d1835e0d2ba0b6a1c75",
  measurementId: "G-SYZX24CYK2",
};

const firebaseApp = firebase.intializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
