//start page

import {app, db, auth} from '/firebase.js'
import { getFirestore, doc, setDoc, updateDoc, getDoc, Timestamp, } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { userUID, userEmail } from './auth.js';
import { noteArray, saveAll, buildNewNotes } from './library.js';

export let loadedData;
//somekind of save functionality
//some kisnd of loading function

//SAVING TO THE DATABASE < CALLED FROM saveAll() IN library.js
//make sure that he can't save before the notes are loaded in, because he will overwrite everthing with empty notes if he does.
//only call load once?? on page load? and it will never have to be called again?
export function saveToDb(array){
    
    //turn array into notesObj
    const notesObj = {};
    function mapFunction(item, i){
        notesObj[i] = {text: item.text, id: item.id};
        i++;
    }
    array.map(mapFunction);

    //prep the datas for saving
    const userDocData = {
        notesObj, 
        email: userEmail
    }

    //save the datas with a success/error handler that can't really tell if it works. lol
    setDoc(doc(db, "users", userUID), {userDocData}).then(function() {
        console.log(`Save Successfull!`);
    },function(error){console.log(`error!!! ${error}`)})
};

//LOADING FROM THE DATABASE
//should fire on login
export function loadFromDb(){
    console.log('loading....');
    getDoc(doc(db, "users", userUID)).then(e => {
        loadedData = e.data().userDocData;
        buildNewNotes(loadedData);
    });
}


//They should not be able to save or load while logged out... you'll have to audit all the functionality a bit.


//test form
//delete this in a bit most likely
const testForm = $('#test-form');
testForm.submit(function(e) {
    console.log('submitting test formo');
    e.preventDefault();

    let pokemonName = testForm[0][0].value;
    let type = testForm[0][1].value;
    let size = testForm[0][2].value;
    console.log(`you entered: ${pokemonName}, ${type}, ${size}`);

    let docDatas = {
        name: pokemonName,
        type: type,
        size: size,
        location: {
            country: "USA",
            state: "Texas",
            city: "Plano"
        },
        timestamp: Date.now()

    };

    setDoc(doc(db, "pokemon", userUID), {email: userEmail});
    setDoc(doc(db, "pokemon", userUID, pokemonName, "data" ), docDatas);
    //can we grab timestamps? that would be cool.

    testForm.trigger("reset");
});

