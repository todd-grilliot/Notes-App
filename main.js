//start page

import { newRow, debugKey, newNote, saveAll } from "./library.js";
import { loadFromDb } from "./db.js";

console.log(" manin .js tbg is starting the app...");

newRow();

//EVENT LISTENERS
debugKey();

$("#new-note-button").click(function (e) {
    e.preventDefault();
    newNote();
});

$("#save-button").click(function (e) {
    e.preventDefault();
    saveAll();
});

$("#load-button").click(function (e) {
    e.preventDefault();
    loadFromDb();
});


/*
    //didn't work
    $('#trash-button-1').click(function (e) {
        e.preventDefault();
        console.log('trash me plsss');
    })
*/

//next thing to do is to go into the load funtion and give it power to pull from the db and copy the data onto the local array,
// then build all the notes on the array using your new powers.
