# SoiAngularBootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

Live demo: [https://tungthecoder.dev/soiAngular-Bootstrap/dist/](https://tungthecoder.dev/soiAngular-Bootstrap/dist/)

## A few points before we start...
* I've implemented 2 filter methods: Filter by Invesment's Name/ Filter by Asset's Name. You can apply the filters seperately or together. I could implement more filter methods but due to time constraint I think those should be enough.
* You can click the expand/collapse symbols next to "Investment" table head to expand/collapse all investments.
* You can click each investment name to expand/collapse that specific investment.
* You can choose another date to reload the data to the table using "Choose Another Date to Reload Data" function. 

** _Noted_: I've implemented the data to reload following condition: 

Right now the json api is at: https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json 

but if the client choose another date, let's say 2018-12-04, then the table will make a call to https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json?date=2018-12-04 accordingly. 

However, since https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json and https://gist.githubusercontent.com/cranium/d8b83184bf0750f2c834760b7c9203dc/raw/a73a70716951f77b90e84b8848ff1fee46938dd1/soi.json?date=2018-12-04 doesn't have any difference in data, you won't be able to see any new data differences loaded to the table.

The evidence that I've implemented such method could be found in:
* soi-data.service.ts (getData(date?) function): https://github.com/TungTNg/soiAngular-Bootstrap/blob/master/src/app/soi-data.service.ts
* home.component.ts (reLoadData(date) function):
https://github.com/TungTNg/soiAngular-Bootstrap/blob/master/src/app/home/home.component.ts
* home.component.html (data binding (ngModelChange)='reLoadData($event)' under [(ngModel)]='data_date' date picker input): https://github.com/TungTNg/soiAngular-Bootstrap/blob/master/src/app/home/home.component.html

## Instruction

You can either visit my live demo at: [https://tungthecoder.dev/soiAngular-Bootstrap/dist/](https://tungthecoder.dev/soiAngular-Bootstrap/dist/), or recreate the whole project using below guide.

##### Note:
Under the project root folder, inside index.html, please change _base href="/app/"_ to _base href="/"_ if you decide to recreate the whole project.

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
