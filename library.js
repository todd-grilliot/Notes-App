//start page

import { Note } from "./note-class.js";
import { saveToDb } from "./db.js";
import { phrases } from "./array-library.js";

//export let noteArray = [];
export const noteArray = [];
export let rowLimitX = Math.floor((window.innerWidth - 50) / 280);
let myTimeout = null;
let timerRunning = null;

export function debugKey() {
    $(document).keydown(function (e) {
        if (e.code === "KeyQ") {
            console.log('debug button');
            //clearArray(noteArray);
            console.log([{txt: "dog"},{txt: "cat"},{txt: "fish"},{txt: "dog"},{txt: "dog"},{txt: "dog"}]);

            console.log(noteArray);
        }
    });
}

// NEW NOTE FUNCTION
export function newNote(text) {
    //this is all happening in the note class constructor now.
    new Note(text);
}

// NEW ROW FUNCTIOM
export function newRow() {
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
    addNewNoteFloat();
}

// AUTOSAVE START TIMER FUNCTION
export function saveTimer() {
    if(timerRunning == true){
        clearTimeout(myTimeout);
        myTimeout = setTimeout(saveAll, 2000);
        timerRunning = true;
    }else{
        myTimeout = setTimeout(saveAll, 2000);
        timerRunning = true;
    }
}

// SAVE FUNCTION
export function saveAll() {
    console.log("saving...");
    $("#save-icon").show();

    //saving each item in the array as the thing that it is
    for (let i = 0; i < noteArray.length; i++) {
        noteArray[i].text = $(".notes-cont").find(".note-textarea").eq(i).val();
    }
    //send that array to saveToDB() in db.js
    saveToDb(noteArray);
}

//BUILD NOTES FUNTION
//coming in from loadFromDb() in db.js
export function buildNewNotes(data) {
    for (let i = 0; i < Object.keys(data.notesObj).length; i++) {
        newNote(data.notesObj[i].text);
    }
}

export function clearArray(array){
    //array = [];
    array.splice(0,array.length);
}

// we'll call you *refresh* NOTES FUNCTION
export function refreshNotes(array) {
    console.log("refreshing all notes");
    //remove all notes
    $(".row .note").not(".active-row").remove();
    //build them again based off of whats in the array...
    rebuildNotes(array);
}

function rebuildNotes(array) {
    //rebuild from the array without loading everything new

    for (let i = 0; i < array.length; i++) {
        let note = array[i];
        note.build(note.text, note.id);

        $(`#trash-button-${i}`).click(function (e) {
            let handlerIndex = e.target.id.slice(-1);
            noteArray[handlerIndex].delete();
        });
    }
}

export function addNewNoteFloat() {
    const localFloatIcon = `<button><i class="fa fa-plus-square"></i></button>`;
    const localFloatDiv = `<div class='new-note-float'>${localFloatIcon}</div>`;

    $(".active-row").append(localFloatDiv);
    $(".new-note-float i, .new-note-float").css("cursor", "pointer");
    $(".new-note-float").click(function (e) {
        console.log("new note float!!!");
        newNote();
        saveTimer();
    });
}

//LOGGED IN AND OUT SCREENS
export function loggedOut() {
    console.log("user is signed out... showing logged out screen");
    //console.log("deleting all notes");
    $(".row .note").not(".active-row").remove();
    $(".notes-cont").hide();
    $("#user-info").hide();

    //newPhrase();
    showLoggedOutContent();

    //delete all notes, hide the div
    // show new div with stuff... maybe instructions, a picture of me? whatever.
}

export function loggedIn(user) {
    console.log("signed in... showing logged in screen...");;
    $(".row .note").not(".active-row").remove();
    $(".notes-cont").show();
    $(".logged-out-cont").hide();
    $("#user-info").show();
}

//MODALS
/* #region  modals */
export function launchModal(modal) {
    //console.log(modal + "!");
    fadeInModal(modal);

    $(window).click(function (e) {
        let classList = Object.values(e.target.classList);
        if (classList.includes("modal")) exitModal();
    });
    $(".modal-content span").click(function (e) {
        exitModal();
    });
}

function fadeInModal(modal) {
    $(modal).show();
    $(".modal").css("opacity", "0");
    $(".modal").animate({ opacity: "1" }, "0.5s");
    $(".modal-content").animate({ margin: "15% auto" }, "0.5s");
    $(".modal-warning").hide();
}
export function exitModal(modal) {
    $(".modal").hide();
    $(".modal").css("opacity", "0");
    $(".modal-content").css("margin", "0 auto");
}

// Adds a new random phrase. not using because it wasn't very clear.
export function newPhrase() {
    $(".logged-out-cont").show();

    let phr = phrases[Math.floor(Math.random() * phrases.length)];
    $("#logged-out-heading").text(phr);
    $("#logged-out-heading").css({ marginTop: "300px", opacity: "0" });
    $("#logged-out-heading").animate(
        { marginTop: "0px", opacity: "1" },
        1500,
        "swing"
    );
}
export function showLoggedOutContent(){
    $(".logged-out-cont").show();
    $("#logged-out-heading").text('Welcome to my notes app!');
    $("#logged-out-subheading").text('create a user or log in :)');
    $("#logged-out-heading, #logged-out-subheading").css({ marginTop: "300px", opacity: "0" });
    $("#logged-out-heading, #logged-out-subheading").animate({ marginTop: "0px", opacity: "1" }, 1500,"swing");
}

export function showErrorWarning(errorCode){
    console.log('error signing in or logging in');
    showWarningWithMessage(`error signing in or logging in (${errorCode})`)
    
    //cases
    if(errorCode === "auth/wrong-password"){showWarningWithMessage(`error, the password you typed is incorrect`);}
    if(errorCode === "auth/user-not-found"){showWarningWithMessage(`error, user not found`);}
    if(errorCode === "email-already-in-use"){showWarningWithMessage(`error, there is already a user with that email`);}
    if(errorCode === "auth/weak-password"){showWarningWithMessage(`error, password should be at least 6 characters long`);}
    if(errorCode === "auth/invalid-email"){showWarningWithMessage(`error, invalid email`);}
}
function showWarningWithMessage(message){
    $(".modal-warning").show();
    $(".modal-warning").text(message);
}

/* #endregion */
// END MODALS

export function mobileDropDown() {
    if($(".mobile-drop-down").is(":visible")) 
        $(".mobile-drop-down").slideUp();
    else 
        $(".mobile-drop-down").slideDown()
}
