import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxuBmGRrwWQdazBjR9DrQZIhECzKBgzuo",
  authDomain: "greenrental-df0c1.firebaseapp.com",
  projectId: "greenrental-df0c1",
  storageBucket: "greenrental-df0c1.appspot.com",
  messagingSenderId: "817219609551",
  appId: "1:817219609551:web:58171bf55b4864d32ba8ba",
  measurementId: "G-GPBQGE59LD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
