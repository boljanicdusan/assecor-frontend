import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Planet } from '@planets/planet.model';

@Component({
    selector: 'app-planet-form',
    templateUrl: './planet-form.component.html',
    styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent {

    @Output() submitted = new EventEmitter<boolean>();
    planet: Planet = new Planet();

    constructor() { }

    submit() {
        this.submitted.emit(true);
        this.planet = new Planet();
    }

    close() {
        this.submitted.emit(false);
        this.planet = new Planet();
    }
}
