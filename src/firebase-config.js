//=================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByu0P9DnkKJqCmmbuu9IKMqW9vunI_5c8",
  authDomain: "test-29cca.firebaseapp.com",
  projectId: "test-29cca",
  storageBucket: "test-29cca.appspot.com",
  messagingSenderId: "223410970107",
  appId: "1:223410970107:web:28042b2ce7faebeb997f5e",
  measurementId: "G-TV1W1JP74Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);