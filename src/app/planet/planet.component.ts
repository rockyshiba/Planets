import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet'; // use class definition src/app

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet;

  planets: Planet[] = [
    {id: 1, name: 'Mercury'},
    {id: 2, name: 'Venus'},
    {id: 3, name: 'Earth'},
    {id: 4, name: 'Mars'},
    {id: 5, name: 'Jupiter'},
    {id: 6, name: 'Saturn'},
    {id: 7, name: 'Uranus'},
    {id: 8, name: 'Neptune'}
  ];

  // method to replace planet property with another object
  onSelect(planet: Planet): void {
    this.planet = planet;
  }

  constructor() { }

  ngOnInit() {
  }

}
