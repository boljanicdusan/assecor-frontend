import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    searchValue = '';

    constructor(private router: Router) { }

    search() {
        const url = this.router.url;
        const types = ['films', 'characters', 'planets'];

        for (const type of types) {
            if (url.indexOf(type) > -1) {
                this.router.navigateByUrl(`/app/${type}?search=${this.searchValue}`);
            }
        }
    }

}
