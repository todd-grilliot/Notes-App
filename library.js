var noteArray = [];
var titleGoof = "dynamic bunghole";
var rowLimitX = 6;


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
    new Note(titleGoof, inputTest);
    console.log(noteArray[noteArray.length-1].id);

    $(".active-row").append(`<div class='note'><p>${noteArray[noteArray.length -1].text}</p></div>`);
    //$(".active-row").append(`<div class='note'><p>${inputTest}</p></div>`);

    //count the notes to see if we need a new row
    if(noteArray.length % 6 === 0) newRow();

}
function newRow(){
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
}

