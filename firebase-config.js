// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVVWaKK51E49G65-gPKP2PvEOXZLZGPn8",
  authDomain: "note-app-5d4fd.firebaseapp.com",
  projectId: "note-app-5d4fd",
  storageBucket: "note-app-5d4fd.appspot.com",
  messagingSenderId: "1073937479188",
  appId: "1:1073937479188:web:b0847fe5ae17b10239d901",
  measurementId: "G-PTNRYDPML0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);