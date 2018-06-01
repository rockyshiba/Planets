import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet'; // use class definition src/app
import { PlanetService } from '../planet.service';  // use planet service

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet;
  planets: Planet[];

  // method to replace planet property with another object
  onSelect(planet: Planet): void {
    this.planet = planet;
  }

  constructor(private planetService: PlanetService) { }

  // this method executes when the component loads.
  ngOnInit() {
    // the peas are the objects being returned from the service.
    this.planetService.getPlanets().subscribe(peas => this.planets = peas);
  }

}
