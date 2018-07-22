import { Actor } from '../models/actor';


export class Film {
  id: number;
  title: string;
  description: string;
  actors: Actor[];

  constructor(id?: number, title?: string, description?: string, actors?: Actor[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.actors = actors;
  }

}
