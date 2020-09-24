import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getDetailsUrl } from '@helpers/get-details-url.function';
import { getARandomImage } from '@helpers/get-a-random-image.function';
import { Character } from '@characters/character.model';

@Component({
    selector: 'app-character-list-item',
    templateUrl: './character-list-item.component.html',
    styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {

    @Input() character: Character;

    image: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.image = getARandomImage('character');
    }

    goToDetails(url: string): void {
        const detailsUrl = getDetailsUrl(url, 'characters');
        this.router.navigateByUrl(detailsUrl);
    }
}
