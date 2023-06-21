import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
//auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//firestoredb
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";
//real time database
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBUxKrprMaCVbaTOSB4iGYXXVLRWXtfgZ0",
  authDomain: "uu-2012ec-cs-final-project.firebaseapp.com",
  projectId: "uu-2012ec-cs-final-project",
  storageBucket: "uu-2012ec-cs-final-project.appspot.com",
  messagingSenderId: "44565023917",
  appId: "1:44565023917:web:a2efe2532ffa5b3c744a24",
  measurementId: "G-NWP1LC72FS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export default app;
