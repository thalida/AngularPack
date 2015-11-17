# Angular Seed
An angular app seed for a project using webpack, gulp, coffeescript, and scss.

## Setup
1. First make sure you have `node` and `npm` installed
2. Run the cmd `npm install` while in the project directory

## Usage
### Development
- Run the cmd `gulp` to kickoff the webpack dev webserver

### Deploying
- Run the cmd `gulp deploy`

### Generating Structures
- `gulp create --type [view|directive|service] --name featureName`
- For help: `gulp create -h`

This generates a new view, directive, or service with the given name in the app. It applies the proper folder strucutre, and addes the new structure collection to the approriate parent collection (either views.collection.coffee or components.collection.coffee)
