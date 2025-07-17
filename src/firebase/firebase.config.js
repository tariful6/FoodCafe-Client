// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6zficZmdWFN1G0yTfHZ0n7BX-8g7Laxo",
  authDomain: "bistroboss-42f74.firebaseapp.com",
  projectId: "bistroboss-42f74",
  storageBucket: "bistroboss-42f74.firebasestorage.app",
  messagingSenderId: "120243356399",
  appId: "1:120243356399:web:25b7dbce555f6b5921911a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;