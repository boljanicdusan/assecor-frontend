import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '@characters/character.service';
import { Character } from '@characters/character.model';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

    characters: Character[];

    constructor(
        private characterService: CharacterService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            params => {
                const search = params['search'];
                search ? this.searchCharacters(search) : this.getCharacters();
            }
        );
    }

    private getCharacters(): void {
        this.characterService.getCharacters()
            .subscribe(response => this.characters = response.results);
    }

    private searchCharacters(search: string): void {
        this.characterService.searchCharacters(search)
            .subscribe(response => this.characters = response.results);
    }

}
