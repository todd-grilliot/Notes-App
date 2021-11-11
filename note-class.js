import { noteArray } from './library.js';

export class Note {
    constructor(text){
        this.text = text;
        this.id = noteArray.length;
        //this.color?...

        noteArray.push(this);
    }
}

