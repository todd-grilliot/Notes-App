import {app, db, auth} from '/firebase.js'
import { getFirestore, doc, setDoc, Timestamp, } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { currentUID } from './auth.js';

//test form
const testForm = $('#test-form');
testForm.submit(function(e) {
    console.log('submitting test formo');
    e.preventDefault();

    var pokemon = testForm[0][0].value;
    var type = testForm[0][1].value;
    console.log(`you entered: ${pokemon}, ${type}`);

    var docDatas = {
        name: pokemon,
        type: type,
        country: "USA"
    };
    
    //save to db - keep uid
    //await setDoc(doc(db, "pokemon", "zapdos"), docDatas);
    setDoc(doc(db, "pokemon"), docDatas);
    console.log(currentUID);
    //can we grab timestamps? that would be cool.

});

