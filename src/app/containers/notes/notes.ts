import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    templateUrl: 'app/containers/notes/template.html',
    styleUrls: ['app/containers/notes/styles.css']
})

export class NotesContainer {
    notes = [
        { title: "Education", value: "Finish all the labs", color: "lightblue" },
        { title: "CV", value: "Refactor my CV", color: "red" },
        { title: "Cook", value: "Cook my dinner", color: "aqua" }
    ];

    onNoteChecked(i: number) {
        this.notes.splice(i, 1);
    }
};