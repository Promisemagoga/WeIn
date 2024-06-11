// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2iDwWu377FktzA1Nyips7Ro9ATcJ0cu4",
  authDomain: "wein-4865b.firebaseapp.com",
  projectId: "wein-4865b",
  storageBucket: "wein-4865b.appspot.com",
  messagingSenderId: "916622826082",
  appId: "1:916622826082:web:2d5290888ea8505fb8cf3b",
  measurementId: "G-HETZBYS93X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);