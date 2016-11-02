import { Component } from '@angular/core';

@Component({
    selector: 'notes-container',
    templateUrl: 'app/containers/notes/template.html',
    styleUrls: ['app/containers/notes/styles.css']
})

export class NotesContainer {
    note = { 
        title : "this is a title",
        value : "this is a value"
    };
};