class Note {
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.id = noteArray.length;
        //this.color?...

        noteArray.push(this);
    }

}