// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCagEhrqAQgd6o9qXreWfVcIyshfJansfM",
  authDomain: "event-manager-57eb7.firebaseapp.com",
  projectId: "event-manager-57eb7",
  storageBucket: "event-manager-57eb7.firebasestorage.app",
  messagingSenderId: "1054735642998",
  appId: "1:1054735642998:web:105d1d3b588a2f9eae0a57",
  measurementId: "G-31EE9VHET0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);