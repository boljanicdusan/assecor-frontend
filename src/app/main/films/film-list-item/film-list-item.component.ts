import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '@films/film.model';
import { getARandomImage } from '@helpers/get-a-random-image.function';
import { getDetailsUrl } from '@helpers/get-details-url.function';

@Component({
    selector: 'app-film-list-item',
    templateUrl: './film-list-item.component.html',
    styleUrls: ['./film-list-item.component.css']
})
export class FilmListItemComponent implements OnInit {

    @Input() film: Film;

    image: string;

    constructor(private router: Router) { }

    ngOnInit() {
        this.image = getARandomImage('film');
    }

    goToDetails(url: string): void {
        const detailsUrl = getDetailsUrl(url, 'films');
        this.router.navigateByUrl(detailsUrl);
    }
}
