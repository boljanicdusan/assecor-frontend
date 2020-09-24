import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '@characters/character.model';

@Component({
    selector: 'app-character-form',
    templateUrl: './character-form.component.html',
    styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent {

    @Output() submitted = new EventEmitter<boolean>();
    character: Character = new Character();

    constructor() { }

    submit() {
        this.submitted.emit(true);
        this.character = new Character();
    }

    close() {
        this.submitted.emit(false);
        this.character = new Character();
    }

}
