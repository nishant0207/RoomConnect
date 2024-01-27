// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: backend.env.apiKey,
  authDomain: backend.env.authDomain,
  projectId: backend.env.projectId,
  storageBucket: backend.env.storageBucket,
  messagingSenderId: backend.env.messagingSenderId,
  appId: backend.env.appId,
  measurementId: backend.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);