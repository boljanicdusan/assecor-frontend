import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '@films/film.model';
import { FilmService } from '@films/film.service';
import { Planet } from '@planets/planet.model';
import { PlanetService } from '@planets/planet.service';
import { Character } from '@characters/character.model';
import { CharacterService } from '@characters/character.service';
import { getDetailsUrl } from '@helpers/get-details-url.function';

declare var $;

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.component.html',
    styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

    film: Film;
    characters: Character[] = [];
    planets: Planet[] = [];

    constructor(
        private filmService: FilmService,
        private characterService: CharacterService,
        private planetService: PlanetService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            params => {
                const filmId = params['id'];
                this.getFilmDetails(filmId);
            }
        );

        this.registerModalEvents();
    }

    goToDetails(url: string, type: 'characters' | 'planets'): void {
        this.router.navigateByUrl(getDetailsUrl(url, type));
    }

    close(modal: string) {
        $(`#${modal}`).modal('hide');
    }

    private getFilmDetails(filmId: number) {
        this.filmService.getFilmDetails(filmId)
            .subscribe(response => {
                this.film = response;
                this.getCharacters(this.film.characters);
                this.getPlanets(this.film.planets);
            });
    }

    private getCharacters(characterUrls: string[]): void {
        this.characterService.getCharactersFromUrls(characterUrls)
            .subscribe(response => this.characters = response);
    }

    private getPlanets(planetUrls: string[]): void {
        this.planetService.getPlanetsFromUrls(planetUrls)
            .subscribe(response => this.planets = response);
    }

    private registerModalEvents() {
        $('#characterFormModal').on('show.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(8px)';
        });

        $('#characterFormModal').on('hide.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(0px)';
        });

        $('#planetFormModal').on('show.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(8px)';
        });

        $('#planetFormModal').on('hide.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(0px)';
        });
    }

}
