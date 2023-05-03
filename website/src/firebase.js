// FIREBASE CODE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDc_dW85y-OphpnmDyc0tc8-KCZFkdt-Gk",
  authDomain: "capstone-cb532.firebaseapp.com",
  projectId: "capstone-cb532",
  storageBucket: "capstone-cb532.appspot.com",
  messagingSenderId: "915567031501",
  appId: "1:915567031501:web:38c836dc7de5adac0aa584",
  measurementId: "G-2D3LMTNEL3",
  databaseURL: "https://capstone-cb532-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };