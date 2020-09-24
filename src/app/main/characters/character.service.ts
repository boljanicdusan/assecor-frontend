import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment.prod';
import { StarWarsResponse } from '../star-wars-response.model';
import { Character } from './character.model';
import { getIdFromUrl } from 'src/app/helpers/get-id-from-url.function';
import { SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    private url: string = environment.serverUrl + 'people/';

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<StarWarsResponse<Character>> {
        return this.http.get<StarWarsResponse<Character>>(this.url);
    }

    getCharacterDetails(characterId: number): Observable<Character> {
        return this.http.get<Character>(this.url + characterId);
    }

    searchCharacters(search: string): Observable<StarWarsResponse<Character>> {
        return this.http.get<StarWarsResponse<Character>>(this.url, { params: { search }});
    }

    getCharactersFromUrls(characterUrls: string[]): Observable<Character[]> {
        const observables: Observable<Character>[] = [];

        characterUrls.forEach(characterUrl => {
            const characterId = getIdFromUrl(characterUrl);
            observables.push(this.getCharacterDetails(+characterId));
        });

        return forkJoin(observables);
    }
}
