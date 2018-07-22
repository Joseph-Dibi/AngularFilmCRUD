import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './model/film/film.component';
import { ActorComponent } from './model/actor/actor.component';
import { FilmSiteComponent } from './film-site/film-site.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ActorComponent,
    FilmSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
