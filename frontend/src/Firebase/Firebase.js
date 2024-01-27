// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVAzFb9LSZDk4Ex59Myx0_CCnUhWdFCkA",
  authDomain: "room-connect-88b78.firebaseapp.com",
  projectId: "room-connect-88b78",
  storageBucket: "room-connect-88b78.appspot.com",
  messagingSenderId: "256986412795",
  appId: "1:256986412795:web:9bc8705d26b1a21cb8a25e",
  measurementId: "G-1DE065R7GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);