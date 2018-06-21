import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    // get id from url
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(id).subscribe(data => this.planet = data);
  }

}
