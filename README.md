# Angular Seed

An [AngularJS](http://angularjs.org/) app seed for a project using webpack, gulp, coffeescript, and scss.

## Getting Started

### Clone AngularPack

Clone the AngularPack repository using [git][git]:

```
git clone git@github.com:thalida/AngularPack.git
cd AngularPack
```

### Install Dependencies

We depend on `npm`, the [node package manager][npm] for *all* of the tools and libraries we need to develop the app.

```
npm install
```

### Running the Application

#### In Development
This repo comes with the webpack build server already configured, start the server with:

```
gulp
```

Browse to the app at `http://localhost:8000/app`.

#### In Production
```
gulp deploy
```

## Directory Layout

```
app/                            --> The source files for the angular app
  assets/                       --> Global scss, images, audio, etc
    styles/                     --> Global/general scss
      app.scss                  --> Default global app stylesheet
      mixins.scss               --> SCSS file for all mixins and placeholders
    images/
  components/                   --> All the app specific directives, services, factories
    helloYou/                   --> HelloYou Component Files
      helloYou.collection.coffee--> HelloYou collection of requires
      helloYou.directive.coffee --> HelloYou directive logic
      helloYou.html             --> HelloYou template
      helloYou.scss             --> HelloYou directive stylesheet
  views/
    base/                       --> The Base view template + logic
      base.collection.coffee    --> Base collection of requires
      base.controller.coffee    --> Base controller logic
      base.route.coffee         --> Base route logic
      base.html                 --> Base partial template
      base.scss                 --> Base specific stylesheet
    view1/                      --> The View1 view template + logic
      view1.collection.coffee   --> View1 collection of requires
      view1.controller.coffee   --> View1 controller logic
      view1.route.coffee        --> View1 route logic
      view1.html                --> View1 partial template
      view1.scss                --> View1 specific stylesheet
  app.coffee                    --> The main app module
  index.html                    --> The main html app template
```

## Generating Structures

Generate a new view, directive, or service with the given name in the app. It applies the proper folder strucutre, and addes the new structure collection to the approriate parent collection (either views.collection.coffee or components.collection.coffee)

```
gulp create --type [view|directive|service] --name featureName
```

For help run the command: 

```
gulp create -h
```

## Updating

You can update the dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
