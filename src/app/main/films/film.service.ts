import { StarWarsResponse } from './../star-wars-response.model';
import { environment } from '@environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Film } from './film.model';
import { getIdFromUrl } from 'src/app/helpers/get-id-from-url.function';

@Injectable({
    providedIn: 'root'
})
export class FilmService {

    private url: string = environment.serverUrl + 'films/';

    constructor(private http: HttpClient) { }

    getFilms(): Observable<StarWarsResponse<Film>> {
        return this.http.get<StarWarsResponse<Film>>(this.url);
    }

    getFilmDetails(filmId: number): Observable<Film> {
        return this.http.get<Film>(this.url + filmId);
    }

    searchFilms(search: string): Observable<StarWarsResponse<Film>> {
        return this.http.get<StarWarsResponse<Film>>(this.url, { params: { search }});
    }

    getFilmsFromUrls(filmUrls: string[]): Observable<Film[]> {
        const observables: Observable<Film>[] = [];

        filmUrls.forEach(filmUrl => {
            const filmId = getIdFromUrl(filmUrl);
            observables.push(this.getFilmDetails(+filmId));
        });

        return forkJoin(observables);
    }
}
