import { PlanetService } from '@planets/planet.service';
import { Planet } from '@planets/planet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

    planets: Planet[];

    constructor(
        private planetService: PlanetService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            params => {
                const search = params['search'];
                search ? this.searchPlanets(search) : this.getPlanets();
            }
        );
    }

    private getPlanets() {
        this.planetService.getPlanets()
            .subscribe(response => this.planets = response.results);
    }

    private searchPlanets(search: string): void {
        this.planetService.searchPlanets(search)
            .subscribe(response => this.planets = response.results);
    }

}
