// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCjJ6-WofQFSskpQrS70u02sDxjIWRwLbQ",
  authDomain: "project-a3d27.firebaseapp.com",
  projectId: "project-a3d27",
  storageBucket: "project-a3d27.appspot.com",
  messagingSenderId: "680538604414",
  appId: "1:680538604414:web:9a6956ba5ca5892e43e92f",
  measurementId: "G-MZBL4S28FC",
};

let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

const db = getFirestore(firebaseApp, {});
export { db, firebaseApp };
