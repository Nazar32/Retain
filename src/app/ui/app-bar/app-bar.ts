import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'app-bar',
    styleUrls: ['app/ui/app-bar/styles.css'],
    templateUrl: 'app/ui/app-bar/template.html'
})

export class AppBar {

    constructor(private authService: AuthService
                ) {}

    signout() {
        this.authService.sighout();
    }
}