import { 
    Component,
    Output,
    EventEmitter
 } from '@angular/core';


@Component ({
    selector: 'note-creator',
    templateUrl: 'app/ui/note-creator/note-creator-template.html',
    styleUrls: ['app/ui/note-creator/note-creator-styles.css']

})

export class NoteCreator {
    @Output() createNote = new EventEmitter();
    
    newNote = {
        title : '',
        value: ''
    }
    
    fullForm: boolean = false;


    onCreateNote() {  
        const {title, value} = this.newNote;

        if (title && value) {
            this.createNote.next({title, value});
        }

        this.reset();
        this.toggleFormView(false);
    }

    reset() {
        this.newNote = {
            title : '',
            value: ''
        }
    }

    toggleFormView(value: boolean) {
        this.fullForm = value;
    }
}