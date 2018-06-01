import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { Observable, of } from 'rxjs'; // need to import additional 'of'

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  // mock data of planets
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

  // method to retrieve array of objects
  getPlanets(): Observable<Planet[]> {
    return of(this.planets);
  }

  constructor() { }
}
