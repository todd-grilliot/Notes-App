import { Note } from './note-class.js';
import { saveToDb } from './db.js';

export var noteArray = [];
var rowLimitX = Math.floor((window.innerWidth -50) / 280);

export function debugKey(){
    $(document).keydown(function (e) {
        if(e.code === "KeyQ"){
            //console.log(window.innerWidth + "px");
            console.log(noteArray);
        }
    });
}

//NEW NOTE FUNCTION
export function newNote(){
    //make new note object
    new Note();
    console.log(`new note being made! ~ ${noteArray[noteArray.length-1].id}`);

    var localEdit = `<button><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`
    var localTrash = `<button><i class="fa fa-trash-o" aria-hidden="true"></i></button>`
    var localTopBar = `<div class='top-bar'>${localEdit}${localTrash}</div>`
    var localNoteText = `<textarea class='note-textarea' cols='20' rows='12' maxlength='240' placeholder='Write Something!'></textarea>`
    var localNote = `<div class='note'>${localTopBar}<div class='inner-note'>${localNoteText}</div></div>`;

    $(".active-row").append(localNote);

    //count the notes to see if we need a new row
    if(noteArray.length % rowLimitX === 0) newRow();
}

//NEW ROW FUNCTIOM
export function newRow(){
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
}

//SAVE FUNCTION
export function saveAll(){
    console.log('saving...');

    //saving each item in the array as the thing that it is
    for (let i = 0; i < noteArray.length; i++) {
        noteArray[i].text = $('.notes-cont').find('.note-textarea').eq(i).val();
    }

    /*
    //reading back the saved values in the console...
    console.log('values saved, reading them back now...');
    for (let i = 0; i < noteArray.length; i++) {
        console.log(`note ${i}: ${noteArray[i].text}`);
    }
    */
   
    saveToDb(noteArray);
};


//LOAD FUNcTiOn
//coming soon
export function loadAll(){
    console.log('load button wee woo');
}