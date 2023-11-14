import Router from 'express';
import GameController from './GameController'
// @ts-ignore: Unreachable code error
const router = new Router()

const gameController = new GameController();

router.get('/new-game', gameController.createNewGame.bind(gameController))
router.get('/hit-card', gameController.hitPlayerCard.bind(gameController))
router.get('/player-stand', gameController.playerStand.bind(gameController))

export default router;