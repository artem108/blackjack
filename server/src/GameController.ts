import { Request, Response } from 'express';
import GameService from './services/GameService';
import { GameInterface } from './interfaces'
import { readFile } from 'fs/promises';

class GameController {
    game: GameInterface;

    constructor() {
        this.game = {} as GameInterface;
    }

    async createNewGame(req: Request, res: Response) {
        try {
            const result = await readFile(`${__dirname}/cards.json`, "utf8")
            const { cards } = JSON.parse(result);

            this.game = new GameService(cards);

            res.json(this.game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }

    hitPlayerCard(req: Request, res: Response) {
        try {
            this.game.hitPlayerCard();

            res.json(this.game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }

    playerStand(req: Request, res: Response) {
        try {
            this.game.playerPlayed();
            this.game.calculateResults();

            res.json(this.game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default GameController;