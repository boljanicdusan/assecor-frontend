# Assecor frontend solution

## General

This project is a simple web app, which visualizes the API data. The framework used for development is Angular. The API used for this app is SWAPI. 

You can see the lists of all Star Wars movies, characters, and planets with their own details pages. On the film details page, you can find lists of all characters and planets that exist in that film, with links to their details pages. And on the character and planet details pages, you can find the list of films related to that character/planet.

## Project structure

Since the web app is pretty small, there is just one module (AppModule) with one routing module (AppRoutingModule).

Components:
* layout components: navbar and footer
* home component
* film components: film-list, film-list-item, film-form, film-details
* character components: character-list, character-list-item, character-form, character-details
* planet components: planet-list, planet-list-item, planet-form, planet-details
* helper functions - shared functions used on many places in the app  

## Setup

* run `npm install` command to install the dependencies
* run `ng serve` command to run the app

## Dependencies and packages

* Bootstrap 4.5.2

