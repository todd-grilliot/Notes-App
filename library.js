
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
    $(".notes-cont").append("<div class='note'><p>a paragraph</p></div>");
}

