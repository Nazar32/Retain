import { Component } from '@angular/core';
import { NoteService } from '../../services';

@Component({
    selector: 'notes-container',
    templateUrl: 'app/containers/notes/template.html',
    styleUrls: ['app/containers/notes/styles.css']
})

export class NotesContainer {
    notes = [];

    constructor(private noteService: NoteService ) {
        this.noteService.getNotes()
        .subscribe(resp => { console.log(resp.data); this.notes = resp.data});
    }

    onNoteChecked(note) {
        this.noteService.completeNote(note)
        .subscribe(note => {
            const i = this.notes.findIndex(localNote => localNote.id === note.id);
            this.notes.splice(i, 1);
        });
    }

    onCreateNote(note) {
        this.noteService.createNote(note)
        .subscribe(note => this.notes.push(note));
    }
};