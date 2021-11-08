import {app, db, auth} from '/firebase.js'

//test form
const testForm = $('#test-form');
testForm.submit(function(e) {
    console.log('submitting test formo');
    e.preventDefault();

    var pokemon = testForm[0][0].value;
    var type = testForm[0][1].value;
    console.log(`you entered: ${pokemon}, ${type}`);
    
    //save to db - keep uid


});
