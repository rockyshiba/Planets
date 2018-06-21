import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planets: Planet[];

  constructor(
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.planetService.getPlanets().subscribe(data => this.planets = data);
  }

}
