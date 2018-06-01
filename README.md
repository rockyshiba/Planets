# Services

Typically, data shouldn't be within a component; components should be able to use data but data should be readily available outside the component, following the theme of separation of concerns.

## Creating a service

Run 'ng generate service [name of service]' to create a service within angular. These services will serve data to your application. You'll notice that like classes, these are made by angular *outisde* of components. You can often tell these are services because they are importing 'Injectable' from the core library. For now, don't alter @Injectable. This decorator simply tells Anuglar that this service is available from the root.

They key part of a service is it's ability to retrieve data *asynchronously*. Previous to this commit, the display of the planets was synchronous. Importing 'Observable' and 'of' allows the use of the rxjs library which has code to retrieve data when it's ready. Notice the 'Observable' and 'return of' in the getPlanets method of planet.service.ts.

To use a service in a component, simply import the service into the component. Angular recommends that the service be initiated in the 'contructor' method of the component. This also implicitly sets a property in the component class. How the service is used inside a component varies on what the component does. In this example, when the component loads a list of planets should be readily available. The ngOnInit method is premade for this purpose, so that's why getPlanets() is called there. The 'subscribe' method is part of 'Observable'. This method will retrieve a single value, the array of planets defined in the service.

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
