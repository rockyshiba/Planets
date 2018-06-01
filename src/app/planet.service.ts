import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { Observable, of } from 'rxjs'; // need to import additional 'of'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  // method to retrieve array of objects
  getPlanets(): Observable<Planet[]> {
    // return of(this.planets);
    return this.http.get<Planet[]>('http://ghosteacher.com/apis/planets.php');
  }

  constructor(
    private http: HttpClient
  ) { }
}
