import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilmService } from '@films/film.service';
import { PlanetService } from '@planets/planet.service';
import { Planet } from '@planets/planet.model';
import { getDetailsUrl } from '@helpers/get-details-url.function';
import { Film } from '@films/film.model';

declare var $;

@Component({
    selector: 'app-planet-details',
    templateUrl: './planet-details.component.html',
    styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

    planet: Planet;
    films: Film[];

    constructor(
        private planetService: PlanetService,
        private filmService: FilmService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            params => {
                const planetId = params['id'];
                this.getPlanetDetails(planetId);
            }
        );

        this.registerModalEvents();
    }

    goToDetails(url: string, type: 'characters' | 'films') {
        this.router.navigateByUrl(getDetailsUrl(url, type));
    }

    close(modal: string) {
        $(`#${modal}`).modal('hide');
    }

    private getPlanetDetails(planetId: number): void {
        this.planetService.getPlanetDetails(planetId)
            .subscribe(response => {
                this.planet = response;
                this.getFilms(this.planet.films);
            });
    }

    private getFilms(filmUrls: string[]): void {
        this.filmService.getFilmsFromUrls(filmUrls)
            .subscribe(response => this.films = response);
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
