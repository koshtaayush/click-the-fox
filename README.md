# Assignment

### Getting Started

* This project was bootstrapped with `Create React App + Typescript`
* The following version has been used for this application 
* The **node version used** : `v10.16.3`
* The **npm version used** : `6.9.0`

## Running the project in your local

1. Ensure you have nodeJS (the version specified above installed)
2. Clone the project,  
3. Run into the root of the folder and execute `npm install`
4. Run `npm start` in the root directory of the project
5. The project should be up and running. Open http://localhost:3000/
6. The page will reload if you make edits.


## Testing

* For unit testing `jest` framework has been used along with `enzyme`. 
* To execute the unit test cases, please run `npm run test`. This will run all the test in watch mode.


## Approach for problem the code solution is trying to solve.



## Production Build

1. The production build folder can be generted using `npm run build`
2. It will create a build folder. You may serve it with a static server, which can be served therogh any process manager ex: PM2, forever
3. Currently it is being served using express server, the configs are written in `server.js` file
4. For using it install PM2 process manager globally in the machine using `npm install pm2 -g` 
5. A PM2 configuration file is provided as `pm2-config.json`
6. The app can be served using `pm2 start pm2-config.json`
7. It will run on http://localhost:3000/

## Optimizations

1. Typescript has been used for the type checkings so that most of the errors can be caught on development phase itself
2. Linting and pre-commit hooks have been used to follow the code quality and a same pattern
3. Unit testing setup has been done so that a TDD approach can be taken up
4. Lazy loading to improve performance
5. Chunking and hashing the build files generated

### Screens

