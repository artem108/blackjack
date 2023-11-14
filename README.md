# Blackjack by Artem

## How to setup

1. Install dependencies for client folder and run client:
### `cd client`
### `npm i`
### `npm start`

2. Open second terminal and install dependencies for server folder and run server:
### `cd server`
### `npm i`
### `npm run dev`

This steps runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## How to run tests for game logic
### `cd server`
### `npm run test`

## Short overview server arhitecture:

### `server/src/GameController.ts` - Entry point of our logic
    In this class we create our game model by `new GameService` and operate game by this model

### `server/src/services/GameService.ts` - implements our game logic and operate
    `HandsService` and `CardDeckService`

### `server/src/services/HandsService.ts` - implements player and dealer hands
     store current cards of hands, can hit card if need by `hitCard`, handle ace points by `handleAce`, store `totalPoints` per each hand

### `server/src/services/CardDeckService.ts` - store cards deck and give random card from the deck

