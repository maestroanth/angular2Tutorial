<<<<<<< HEAD
# Angular2Fundementals

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# angular2Tutorial

############### MY NOTES ANTHONY WALTER 12/6/2016############

Organization of folders we care about are as followed (4 layers) layer 1 (.git folder e2e node_modules libraries, and src)-> layer 2 is in src (typical website files are in here: index.html styles.css app-root is in index.html. make sure each "-root" app has a different prefex besides app!) -> layer 3 is in app folder (or prefix's name) and contains the main app file (called just app.component.ts (main might be an added benefit to name it later)) -> and layer 4 is all the sub-component folders with corresponding name prefixes (so far simple-form folder with simple-form.component.ts inside)

On lesson 6 in video: https://egghead.io/lessons/angular-2-writing-a-simple-angular-2-component

ADDING REST API REQUEST LESSON: https://www.youtube.com/watch?v=L7xPwhwbcHE <---video stinks a little dated I think, find new one
SERVER TO TEST REST API REQUESTS: http://www.jsontest.com

BOILERPLATE CREATOR FROM TERMINAL = ng (stands for angular) g (stands for generate) s (stands for service)
c (I think stands for create *NOT SURE*). ng is useful for auto-creating angular files!!!

MORE ON THESE BOILERPLATES NOT EXPLAINED IN TUTORIAL: what each ng generate (ng g) does is create 4 files with a templateUrl
that holds the template in one file a styleUrls in style files and whatever the .spec.ts is

WEBSTORM: I cannot find something like Webstorm plugin for atom IDE. So remember to put in imports manually for now (and is healthy practice too)

Set of keywords description: http://demisx.github.io/angularjs/2014/09/14/angular-what-goes-where.html

Problems I still have: Cannot find good keyword color coder plugin for atom for Typescript/Angular 2

Good Atom Package Site: https://www.sitepoint.com/10-essential-atom-add-ons/

Merge development branch with master (this seemed to work fine)

git branch development
git add *
git commit -m "My initial commit message"
git push -u origin development
Now I want to merge all the changes on the development branch into the master. My current approach is:

git checkout master
git merge development
git push -u origin master
Please let me know if the procedure I am following is correct.

>>>>>>> dfae9c797dbac181569a5ea55b2f8abf8786d207
