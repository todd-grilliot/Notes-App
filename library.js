var noteArray = [];
var test = "dynamic bunghole";
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
    //$(".notes-cont").append(`<div class='note'><p>${test}</p></div>`);
    $(".active-row").append(`<div class='note'><p>${test}</p></div>`);
    
}
function newRow(){
    console.log('next row note plas/');
    $(".active-row").removeClass("active-row");
    $(".notes-cont").append(`<div class='row active-row'></div>`);
}

