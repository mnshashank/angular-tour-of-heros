import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

import { SpecialSuperHeroService } from './special-super-hero.service';

// export class Hero {
//   id: number;
//   name: string;
// }

//creation of the constant hero array of type Hero
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private heroService: SpecialSuperHeroService) { }

  heroes: Hero[];
  title = 'Tour of Heroes';
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // };
  selectedHero : Hero;


  getHeroes(): void {
      this.heroService.getHeroes().then( heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
this.getHeroes();
    }
//exposing heroes as a public property of the class
//the type for heroes is infered from the HEROES array itself

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
