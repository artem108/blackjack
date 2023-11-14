import { Request, Response } from 'express';
import { v1 as uuidv1 } from 'uuid';
import GameService from './services/GameService';
import { GamesList } from './interfaces';
import { readFile } from 'fs/promises';

class GameController {
    gamesList: GamesList;

    constructor() {
        this.gamesList = {} as GamesList;
    }

    async getCards() {
        const result = await readFile(`${__dirname}/cards.json`, "utf8");
        return JSON.parse(result);
    }

    async createNewGame(req: Request, res: Response) {
        try {
            const { cards } = await this.getCards();
            const id = uuidv1();
            const game = new GameService(cards, id);

            this.gamesList[id] = game;

            res.json(game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }

    hitPlayerCard(req: Request, res: Response) {
        const game = this.gamesList[req.params.id];

        if (!game) {
            res.status(500).json({ massage: 'Sorry game is over:(' });
        }

        try {
            game.hitPlayerCard();

            if (game.gameOver) {
                delete this.gamesList[req.params.id];
            }

            res.json(game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }

    playerStand(req: Request, res: Response) {
        const game = this.gamesList[req.params.id];

        if (!game) {
            res.status(500).json({ massage: 'Sorry game is over:(' });
        }

        try {
            game.playerPlayed();
            game.calculateResults();

            if (game.gameOver) {
                delete this.gamesList[req.params.id];
            }

            res.json(game.getResults());
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default GameController;