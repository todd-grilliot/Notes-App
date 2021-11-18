//start page

import { loggedOut, loggedIn, exitModal } from "./library.js";
import { loadFromDb } from "./db.js";
import {app, db, auth} from '/firebase.js'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

export let userUID;
export let userEmail;

//auth listener
onAuthStateChanged(auth, (user) => {
    console.log('AUTH STATTE SCHANGE!');
    if(user){
        loggedIn(user);
        userEmail = user.email;
        userUID = user.uid;
        loadFromDb();
    } else{
        loggedOut();
    }
    
})


//signup
const signupForm = $('#signup-form');
signupForm.submit(function(e) {
    e.preventDefault();

    let email = signupForm[0][0].value;
    let password = signupForm[0][1].value;
    console.log(`you entered: ${email}, ${password}`);
    
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred);
        signupForm.trigger("reset");
        exitModal();
    });
});

//login
const loginForm = $('#login-form');
loginForm.submit(function(e) {
    e.preventDefault();

    let email = loginForm[0][0].value;
    let password = loginForm[0][1].value;
    console.log(`you entered: ${email}, ${password}`);

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        console.log(cred);
        loginForm.trigger("reset");
        exitModal();
    });
});

//logout
// const logout = $('#logout-button');
// logout.click(function(e) {
//     e.preventDefault();
    

// })
export function logout(){
    signOut(auth).then(() => {
    }).catch((error) => console.error(error));
}

// so when he saves a document, it will grab his uid to identify him.
// then when we look through the db, we can pull just the data with his uid. :O!
//let's make  a test form where he can enter data and then we'll try to pull it depending on his uid.
