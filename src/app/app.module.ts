import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './main/films/film-list/film-list.component';
import { FilmListItemComponent } from './main/films/film-list-item/film-list-item.component';
import { FilmDetailsComponent } from './main/films/film-details/film-details.component';
import { FilmFormComponent } from './main/films/film-form/film-form.component';
import { CharacterListComponent } from './main/characters/character-list/character-list.component';
import { CharacterListItemComponent } from './main/characters/character-list-item/character-list-item.component';
import { CharacterDetailsComponent } from './main/characters/character-details/character-details.component';
import { CharacterFormComponent } from './main/characters/character-form/character-form.component';
import { PlanetListComponent } from './main/planets/planet-list/planet-list.component';
import { PlanetListItemComponent } from './main/planets/planet-list-item/planet-list-item.component';
import { PlanetDetailsComponent } from './main/planets/planet-details/planet-details.component';
import { PlanetFormComponent } from './main/planets/planet-form/planet-form.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        FilmListComponent,
        FilmListItemComponent,
        FilmDetailsComponent,
        FilmFormComponent,
        CharacterListComponent,
        CharacterListItemComponent,
        CharacterDetailsComponent,
        CharacterFormComponent,
        PlanetListComponent,
        PlanetListItemComponent,
        PlanetDetailsComponent,
        PlanetFormComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
