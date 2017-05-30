import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-service';

@Injectable()
export class SpecialSuperHeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
