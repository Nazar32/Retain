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
    readonly defaultColor: string = 'white';
    colors: string[] = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2'];
    newNote = {
        title : '',
        value: '',
        color: this.defaultColor
    }
    
    fullForm: boolean = false;


    onCreateNote() {

        const {title, value, color} = this.newNote;

        if (title && value && color) {
            this.createNote.next({title, value, color});
        }

        this.reset();
        this.toggleFormView(false);
    }

    reset() {
        this.newNote = {
            title : '',
            value: '',
            color: this.defaultColor
        }
    }

    toggleFormView(value: boolean) {
        this.fullForm = value;
    }

    onColorSelected(color) {
        this.newNote.color = color;
    }
}