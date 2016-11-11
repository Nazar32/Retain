import { Component } from '@angular/core';
import { NoteService } from '../../services';
import { Store } from '../../store';
@Component({
    selector: 'notes-container',
    templateUrl: 'app/containers/notes/template.html',
    styleUrls: ['app/containers/notes/styles.css']
})

export class NotesContainer {
    notes = [];

    constructor(private noteService: NoteService,
                private store: Store
                ) {
        this.noteService.getNotes()
        .subscribe();

        this.store.changes
        .map(data => data.notes)
        .subscribe(notes => this.notes = notes)
    }

    onNoteChecked(note) {
        this.noteService.completeNote(note)
        .subscribe();
    }

    onCreateNote(note) {
        this.noteService.createNote(note)
        .subscribe();
    }
};