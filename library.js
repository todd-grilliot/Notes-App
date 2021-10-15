var noteArray = [];
var rowLimitX = Math.floor((window.innerWidth -50) / 280);
//console.log(screen.width / 400)

function debugKey(){
    $(document).keydown(function (e) {
        if(e.code === "KeyQ"){
            console.log(window.innerWidth);
        }
    });
}

var txt2 = $("<i></i>").text("love ");
function newNote() {

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
function newRow(){
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
}

function saveAll(){
    console.log('saving...');
    //he needs to be able to find each of the note elements and save their data to their objects. Then later he can push that to the DB.
    //we need to find them all in order. There should be a jquery way to do this. probbalbly with a for loop.
    //notes-cont

    for (let i = 0; i < noteArray.length; i++) {
        noteArray[i].text = $('.notes-cont').find('.note-textarea').eq(i).val();
    }

    /*delete later*/
    console.log('values saved, reading them back now...');
    for (let i = 0; i < noteArray.length; i++) {
        console.log(`note ${i}: ${noteArray[i].text}`);
    }


}

