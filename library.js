var noteArray = [];
var rowLimitX = 5;


function debugKey(){
    $(document).keydown(function (e) {
        if(e.code === "KeyQ"){
            console.log('debug!');
        }
    });
}

var txt2 = $("<i></i>").text("love ");
function newNote() {
    console.log('new note being made!');

    //getting text input value
    var inputTest = document.getElementById("input-for-testing").value;

    //make new note object
    new Note(inputTest);
    console.log(noteArray[noteArray.length-1].id);

    //var localNoteText = `<p>${noteArray[noteArray.length -1].text}</p>`; <<<old text came from the text input at the top.
    var localNoteText = `<textarea class='note-textarea' cols='20' rows='12' maxlength='240' placeholder='Write Something!'></textarea>`
    var localEdit = `<button><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`
    var localTrash = `<button><i class="fa fa-trash-o" aria-hidden="true"></i></button>`
    var localTopBar = `<div class='top-bar'>${localEdit}${localTrash}</div>`
    var localNote = `<div class='note'>${localTopBar}<div class='inner-note'>${localNoteText}</div></div>`;

    $(".active-row").append(localNote);

    //count the notes to see if we need a new row
    if(noteArray.length % rowLimitX === 0) newRow();

}
function newRow(){
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
}

