import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterDetailsComponent } from './main/characters/character-details/character-details.component';
import { CharacterListComponent } from './main/characters/character-list/character-list.component';
import { FilmDetailsComponent } from './main/films/film-details/film-details.component';
import { FilmListComponent } from './main/films/film-list/film-list.component';
import { PlanetDetailsComponent } from './main/planets/planet-details/planet-details.component';
import { PlanetListComponent } from './main/planets/planet-list/planet-list.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'app',
        component: MainComponent,
        children: [
            {
                path: 'films',
                component: FilmListComponent
            },
            {
                path: 'films/details/:id',
                component: FilmDetailsComponent
            },
            {
                path: 'characters',
                component: CharacterListComponent
            },
            {
                path: 'characters/details/:id',
                component: CharacterDetailsComponent
            },
            {
                path: 'planets',
                component: PlanetListComponent
            },
            {
                path: 'planets/details/:id',
                component: PlanetDetailsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
