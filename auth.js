import {app, db, auth} from '/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const signupForm = $('#signup-form');
signupForm.submit(function(e) {
    e.preventDefault();

    var email = signupForm[0][0].value;
    var password = signupForm[0][1].value;

    console.log(`you entered: ${email}, ${password}`);
    
    //creates user
    createUserWithEmailAndPassword(auth, email, password);
})


