import { Planet } from '@planets/planet.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDetailsUrl } from '@helpers/get-details-url.function';
import { getARandomImage } from '@helpers/get-a-random-image.function';

@Component({
    selector: 'app-planet-list-item',
    templateUrl: './planet-list-item.component.html',
    styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent implements OnInit {

    @Input() planet: Planet;

    image: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.image = getARandomImage('planet');
    }

    goToDetails(url: string): void {
        const detailsUrl = getDetailsUrl(url, 'planets');
        this.router.navigateByUrl(detailsUrl);
    }
}
