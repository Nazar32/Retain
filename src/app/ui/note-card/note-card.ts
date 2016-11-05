import { 
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component ({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card/template.html',
    styleUrls: ['app/ui/note-card/styles.css']
})

export class NoteCard {
    @Input() note = {};
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    toggleCheck() {
        this.showCheck = !this.showCheck;
    }

    onChecked() {
       this.checked.next(this.note);
    } 
};