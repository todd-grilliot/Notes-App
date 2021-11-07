  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVVWaKK51E49G65-gPKP2PvEOXZLZGPn8",
    authDomain: "note-app-5d4fd.firebaseapp.com",
    projectId: "note-app-5d4fd",
    //storageBucket: "note-app-5d4fd.appspot.com",
    //messagingSenderId: "1073937479188",
    appId: "1:1073937479188:web:b0847fe5ae17b10239d901"
  };

// Initialize Firebase
export var app = initializeApp(firebaseConfig);
export var db = getFirestore(app);
export var auth = getAuth();

