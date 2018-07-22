import { Actor } from './../models/actor';
import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-film-site',
  templateUrl: './film-site.component.html',
  styleUrls: ['./film-site.component.css']
})
export class FilmSiteComponent implements OnInit {
  newFilm: Film = new Film();
  newActor: Actor = new Actor();
  selected = null;
  editFilm = null;
    troy = new Actor(1, 'Donald', 'Glover');
    annie = new Actor(2, 'Alison', 'Brie');
    me = new Actor(3, 'Joseph', 'DiBiasi');
    tom = new Actor(4, 'Tom', 'Collins');
    abed = new Actor(5, 'Danny', 'Pudi');

  actors: Actor[] = [this.troy, this.annie, this.me, this.tom, this.abed];

  films: Film[] = [
     // tslint:disable-next-line:max-line-length
     new Film(1, 'Academy Dinosaur', 'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies', [this.troy, this.annie, this.me]),
     // tslint:disable-next-line:max-line-length
     new Film(2, 'President Bang', 'A Fateful Panorama of a Technical Writer And a Moose who must Battle a Robot in Soviet Georgia', [this.tom]),
     // tslint:disable-next-line:max-line-length
     new Film(3, 'Worst Banger', 'A Thrilling Drama of a Madman And a Dentist who must Conquer a Boy in The Outback', [this.abed, this.troy, this.me]),
     // tslint:disable-next-line:max-line-length
     new Film(4, 'Airplane Sierra', 'A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat', [this.troy, this.abed])
   ];

  addFilm() {
      this.newFilm.id = this.films[this.films.length - 1].id + 1;
      this.films.push(this.newFilm);
      this.newFilm = new Film();
  }
  addActor() {
      this.newActor.id = this.actors[this.actors.length - 1].id + 1;
      this.actors.push(this.newActor);
      this.newActor = new Actor();
  }
  setEditFilm() {
    this.editFilm = Object.assign({}, this.selected);
  }
  saveEditFilm() {
  this.films[this.editFilm.id - 1] = this.editFilm;
  this.editFilm = null;
  this.selected = null;
  }
  cancelEditFilm() {
    this.editFilm = null;
  }
  displayTable() {
    this.selected = null;
  }
  displayFilm(film) {
    this.selected = film;
  }
  deleteFilm() {
    this.films.splice(this.selected.id - 1, 1);
    this.selected = null;

  }
  deleteActor(actor) {
    this.actors.splice(actor.id - 1, 1);
  }
  addActorToFilm(actor) {
    let contains = false;
    for (let index = 0; index < this.editFilm.actors.length; index++) {
      const element = this.editFilm.actors[index];
      if (element === actor) {
          contains = true;
          break;
      }
    }
    if (!contains) {
      this.editFilm.actors.push(actor);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
