import { Component } from '@angular/core';

@Component ({
    selector: 'note-creator',
    templateUrl: 'app/ui/note-creator/note-creator-template.html',
    styleUrls: ['app/ui/note-creator/note-creator-styles.css']
})

export class NoteCreator {
    newNote = {
        title : '',
        value: ''
    }
}