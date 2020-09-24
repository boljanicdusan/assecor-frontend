import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

    films: Film[];

    constructor(
        private filmService: FilmService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            params => {
                const search = params['search'];
                search ? this.searchFilms(search) : this.getFilms();
            }
        );
    }

    private getFilms(): void {
        this.filmService.getFilms()
            .subscribe(response => this.films = response.results);
    }

    private searchFilms(search: string): void {
        this.filmService.searchFilms(search)
            .subscribe(response => this.films = response.results);
    }

}
