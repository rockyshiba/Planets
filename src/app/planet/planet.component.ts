import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet'; // use class definition src/app

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet = {id: 1, name: 'Mercury'};

  constructor() { }

  ngOnInit() {
  }

}
