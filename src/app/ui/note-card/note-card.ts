import { 
    Component,
    Input
} from '@angular/core';

@Component ({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card/template.html',
    styleUrls: ['app/ui/note-card/styles.css']
})

export class NoteCard {
    @Input() note = {};
    showCheck: boolean = false;

    toggleCheck() {
        this.showCheck = !this.showCheck;
    }

    onChecked() {
       //change styles of note-card 
    } 
};