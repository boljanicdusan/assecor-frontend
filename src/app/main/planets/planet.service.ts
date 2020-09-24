import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment.prod';
import { Planet } from '@planets/planet.model';
import { Observable, forkJoin } from 'rxjs';
import { StarWarsResponse } from '../star-wars-response.model';
import { getIdFromUrl } from 'src/app/helpers/get-id-from-url.function';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

    private url: string = environment.serverUrl + 'planets/';

    constructor(private http: HttpClient) { }

    getPlanets(): Observable<StarWarsResponse<Planet>> {
        return this.http.get<StarWarsResponse<Planet>>(this.url);
    }

    getPlanetDetails(planetId: number): Observable<Planet> {
        return this.http.get<Planet>(this.url + planetId);
    }

    searchPlanets(search: string): Observable<StarWarsResponse<Planet>> {
        return this.http.get<StarWarsResponse<Planet>>(this.url, { params: { search }});
    }

    getPlanetsFromUrls(planetUrls: string[]): Observable<Planet[]> {
        const observables: Observable<Planet>[] = [];

        planetUrls.forEach(planetUrl => {
            const planetId = getIdFromUrl(planetUrl);
            observables.push(this.getPlanetDetails(+planetId));
        });

        return forkJoin(observables);
    }
}
