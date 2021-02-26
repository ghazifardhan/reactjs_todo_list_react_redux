import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCBLSryClyrYARRdHK9KjzTFiqwtmDp3I",
  authDomain: "dayone-8407c.firebaseapp.com",
  projectId: "dayone-8407c",
  storageBucket: "dayone-8407c.appspot.com",
  messagingSenderId: "153743211289",
  appId: "1:153743211289:web:445424280e8b7b0d87e388"
};

// initilialize firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const todosRef = firestore.collection("/todos");