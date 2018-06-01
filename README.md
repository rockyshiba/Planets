# Using a Webservice

This commit will show you have to retrieve data from a RESTful api. If you've been following the Heroes example by Angular, this is not covered by that tutorial.

## app.module.ts

Up until know, you may not have had to interact with this file. For RESTful services to work in Anuglar, the HttpClientModule needs to be included from Anuglar's http library:

import { HttpClientModule } from '@angular/common/http';

This also needs to be declared in 'imports' array that is part of @NgModule. Note that HttpClientModule needs to be *after* BrowserModule in the array.

## Services Consuming API

## planet.service.ts

In this example, the planet service is consuming an api. To be able to use an api, the service also needs access to the Http library like app.module.ts. Notice the constructor: like a service injected into a component, http needs to be injected into the service. The getPlanet() method then returns the result of using an api endpoint. Configuring the source of data in services allows minimum involvment in other parts of the application. The component displaying the data, planet.component.ts, hasn't changed yet is now displaying live data provided from an api.

## Planets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
