import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main, NotesContainer } from './app/containers';
import { AppBar, NoteCard } from './app/ui';

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        NotesContainer
    ],
    imports: [BrowserModule],
    bootstrap: [App]
})

export class AppModule {

};

platformBrowserDynamic().bootstrapModule(AppModule);
