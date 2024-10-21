// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA0MD3F1RCXDvAi05_USeRqO_1y_EQ8woY",
//   authDomain: "disneyplus-clone-1bb1f.firebaseapp.com",
//   projectId: "disneyplus-clone-1bb1f",
//   storageBucket: "disneyplus-clone-1bb1f.appspot.com",
//   messagingSenderId: "602121923992",
//   appId: "1:602121923992:web:3fe6977731eb342dde0fed",
//   measurementId: "G-83WXRH472F",
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

/////////////////////////////

// Import Firebase modules individually
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0MD3F1RCXDvAi05_USeRqO_1y_EQ8woY",
  authDomain: "disneyplus-clone-1bb1f.firebaseapp.com",
  projectId: "disneyplus-clone-1bb1f",
  storageBucket: "disneyplus-clone-1bb1f.appspot.com",
  messagingSenderId: "602121923992",
  appId: "1:602121923992:web:3fe6977731eb342dde0fed",
  measurementId: "G-83WXRH472F",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
