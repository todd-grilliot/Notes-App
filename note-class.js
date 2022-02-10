//start page

import { noteArray, rowLimitX, newRow, refreshNotes, addNewNoteFloat, saveTimer } from "./library.js";

export class Note {
    constructor(text) {
        this.text = text;
        this.id = noteArray.length;
        //this.color?...

        if(!this.text){
            console.log('constructor error - no text');
        }
        noteArray.push(this);
        this.build(this.text, this.id);



        //the trash button event listener - calls the this.delete function in a very round about way because jquery gets confused about "this"
        $(`#trash-button-${noteArray[noteArray.length - 1].id}`).click(function (e) {
            let handlerIndex = e.target.id.slice(-1);
            noteArray[handlerIndex].delete();
        });

        //trying to copy the trash event listener to do the same thing for when the textbox changes...
        $(`#note-textarea-${noteArray[noteArray.length - 1].id}`).on('input', function (e) {
            saveTimer();
        });
    }

    build(text, id) {
        //console.log('calling the build function for ' + this.id);

        if (!text) {text = "";}

        let localEdit = `<button><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
        let localTrash = `<button><i class="fa fa-trash-o trash-button" id="trash-button-${id}" aria-hidden="true"></i></button>`;
        let localTopBar = `<div class='top-bar'>${localEdit}${localTrash}</div>`;
        let localNoteText = `<textarea class='note-textarea' id="note-textarea-${id}" cols='18' rows='12' maxlength='260' placeholder='Write Something!'>${text}</textarea>`;
        let localNote = `<div class='note'>${localTopBar}<div class='inner-note'>${localNoteText}</div></div>`;

        $(".active-row").append(localNote);

        if ($(".note").length % rowLimitX === 0) newRow();
        $(".new-note-float").remove();
        addNewNoteFloat();
    }

    delete() {
        //delete this note i suppose
        //i think that we'll have to reform the noteArray so that he's not in there, remove all the dom elements and build them all again?
        // or we could remove just the dom elements for that one thing?? that sounds really hard, better to just build everything again. it will be basically instantaneous.
        console.log("we are going to delete this note " + this.id);

        //pull this note from the Array
        noteArray.splice(this.id, 1);
        //put the ids back in order
        for (let i = 0; i < noteArray.length; i++) {
            noteArray[i].id = i;
        }
        //wipe all //then load all again, wait will we have to save it? there will be no ctrl z in this app.
        refreshNotes(noteArray);

        // start / restart the autosave timer
        saveTimer();

        

    }
}

