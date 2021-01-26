import { Component, OnInit } from '@angular/core';
import { Hero } from '../Inicio';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero | null = null;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}