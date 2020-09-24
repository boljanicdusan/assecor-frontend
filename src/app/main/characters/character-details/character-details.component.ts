import { getIdFromUrl } from 'src/app/helpers/get-id-from-url.function';
import { PlanetService } from '@planets/planet.service';
import { FilmService } from '@films/film.service';
import { CharacterService } from '@characters/character.service';
import { Planet } from '@planets/planet.model';
import { Character } from './../character.model';
import { Component, OnInit } from '@angular/core';
import { Film } from '@films/film.model';
import { ActivatedRoute, Router } from '@angular/router';
import { getDetailsUrl } from '@helpers/get-details-url.function';

declare var $;

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

    character: Character;
    films: Film[] = [];
    homeplanet: Planet;

    constructor(
        private characterService: CharacterService,
        private filmService: FilmService,
        private planetService: PlanetService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            params => {
                const characterId = params['id'];
                this.getCharacterDetails(characterId);
            }
        );

        this.registerModalEvents();
    }

    goToDetails(url: string, type: 'films' | 'planets') {
        this.router.navigateByUrl(getDetailsUrl(url, type));
    }

    close(modal: string) {
        $(`#${modal}`).modal('hide');
    }

    private getCharacterDetails(characterId: number) {
        this.characterService.getCharacterDetails(characterId)
            .subscribe(response => {
                this.character = response;
                this.getFilms(this.character.films);
                this.getHomePlanet(this.character.homeworld);
            });
    }

    private getFilms(filmUrls: string[]): void {
        this.filmService.getFilmsFromUrls(filmUrls)
            .subscribe(response => this.films = response);
    }

    private getHomePlanet(planetUrl: string): void {
        const planetId = getIdFromUrl(planetUrl);
        this.planetService.getPlanetDetails(planetId)
            .subscribe(response => this.homeplanet = response);
    }

    private registerModalEvents() {
        $('#filmFormModal').on('show.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(8px)';
        });

        $('#filmFormModal').on('hide.bs.modal', (e) => {
            const body: any = document.getElementsByClassName('a-details-page')[0];
            body.style.filter = 'blur(0px)';
        });
    }
}
