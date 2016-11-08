import { 
    Component,
    Input,
    Output,
    EventEmitter
 } from '@angular/core';

@Component({
    selector: 'color-picker',
    templateUrl: 'app/ui/color-picker/color-picker-template.html',
    styleUrls: ['app/ui/color-picker/color-picker-styles.css']
})

export class ColorPicker {
    @Input() colors: string[] = [];
    @Output() selected = new EventEmitter();
    isSelectorVisible: boolean = false;

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

    selectColor(color: string) {
        this.showSelector(false);
        this.selected.next(color);
    }
}