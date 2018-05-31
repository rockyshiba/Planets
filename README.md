## Creating Components

Run 'ng generate component [name of component]' from project root. This will create a folder within src/app containing the necessary files of a component. When generating a component this way, app.module.ts is altered in src/app. Take a look at lines 5 and 10 in app.module.ts. This is how components are registered. Keep this in mind when you want to remove components. Removing components requires that you delete the folder containing the component and remove the component references inside app.module.ts

In planet.component.ts an object is initiated to represent a planet, Mercury. This can be used in the component's view which in this context is planet.component.html. It is typed to a class defined outside the component. In order for components to utilize resources outside of the component, they must be imported which is done on line 2 in planet.component.ts. 

## Creating Classes

Run 'ng generate class [name of class]' from project root. This will create a class definition inside src/app which can be readily imported to other parts of an Angular project. You can see a newly created class definition in src/app called planet.ts.

# Planets

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

