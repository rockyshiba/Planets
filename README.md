# Multiple objects

In planet.component.ts there is a hard-coded array of planet objects. In the HTML this can be looped over one of many Angular attributes.

## ngFor

ngFor will loop over loopable objects that exist inside the TypeScript of a component. Notice that the value of this attribute is a TypeScript loop statement. The loop variable, in this case 'p', can then be used to represent each loopable object.

## ngIf

ngIf operates on the same principles of javascript if statements. The value of this attribute will evaluate as true or false. The statement here determines if 'planet' is true or false. Now that planet is initally 'undefined' when the page loads, that evaluates as false in javascript which prevents the rest of the HTML from rendering.

## (click)

(click) is Angular's shortcut to adding listener events to your page. Here, click is being applied to each listable element within the ordered list. The value here is a function call with an argument which here is 'p', the loop variable. The function definition is within planet.component.ts which is setting 'planet' to a value. This then renders if(planet) true which in turn allows ngIf='planet' to render its contents.

## [class.[intended class name]]

Angular has conditional css class setters. In this example, if the object matches the 'planet' inside planet.component.ts, then that element will have the 'selected' css class applied which then applies the appropriate styling. Here, planet.component.css has a component-specific css class that will highlight an element as lightgrey.

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
