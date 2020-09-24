import { Film } from './../film.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-film-form',
    templateUrl: './film-form.component.html',
    styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent {

    @Output() submitted = new EventEmitter<boolean>();
    film: Film = new Film();

    constructor() { }

    submit() {
        this.submitted.emit(true);
        this.film = new Film();
    }

    close() {
        this.submitted.emit(false);
        this.film = new Film();
    }

}
