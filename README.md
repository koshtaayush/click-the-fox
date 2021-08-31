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
1. The images are not shown till the time they are loaded to create a seamless experience
2. The images are preloaded from before
3. The painting process/time of images has also been taken into account

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

1. Welcome Screen
<img width="759" alt="Screenshot 2021-09-01 at 4 31 05 AM" src="https://user-images.githubusercontent.com/14069441/131587645-192c8036-9413-4956-bf7f-995e6579444f.png">

2. Welcome screen with name
<img width="686" alt="Screenshot 2021-09-01 at 4 31 15 AM" src="https://user-images.githubusercontent.com/14069441/131587681-b22f9ab2-479f-4454-98db-af2758639288.png">

3. Hello Screen
<img width="658" alt="Screenshot 2021-09-01 at 4 31 21 AM" src="https://user-images.githubusercontent.com/14069441/131587706-97e3e60f-3cf2-4f66-bdd9-aa6ae79292e9.png">

4. Loading Screen
<img width="659" alt="Screenshot 2021-09-01 at 4 40 08 AM" src="https://user-images.githubusercontent.com/14069441/131587791-9b58d424-8006-4bf7-b436-e019b4935f19.png">

5. Play Screen
<img width="1030" alt="Screenshot 2021-09-01 at 4 31 30 AM" src="https://user-images.githubusercontent.com/14069441/131587726-ca306579-404d-4f97-824b-e5475f425c06.png">

6. Scoreboard
<img width="929" alt="Screenshot 2021-09-01 at 4 39 08 AM" src="https://user-images.githubusercontent.com/14069441/131587756-1f0bd7ac-695e-4bd1-94c2-2d507e4f4b79.png">

