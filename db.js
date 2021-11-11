import {app, db, auth} from '/firebase.js'
import { getFirestore, doc, setDoc, updateDoc, Timestamp, } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { userUID, userEmail } from './auth.js';
import { noteArray, saveAll } from './library.js';

//somekind of save functionality
//some kisnd of loading function

export function saveToDb(array){
    console.log('save to db pls');
    console.log(array);

    //it might be cool if you could do it all in one request but for now this will work
    for (let i = 0; i < array.length; i++) {
        var noteData = {
            text: array[i].text,
            id: array[i].id
        }
        setDoc(doc(db, "users", userUID, `note: ${i+1}`, "Note Data"), noteData);
    };
    setDoc(doc(db, "users", userUID), {email: userEmail});
}







//test form
const testForm = $('#test-form');
testForm.submit(function(e) {
    console.log('submitting test formo');
    e.preventDefault();

    var pokemonName = testForm[0][0].value;
    var type = testForm[0][1].value;
    var size = testForm[0][2].value;
    console.log(`you entered: ${pokemonName}, ${type}, ${size}`);

    var docDatas = {
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

