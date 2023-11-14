import HandsService from './HandsService';
import CardDeckService from './CardDeckService';
import { GameInterface, HandsInterface, CardInterface, CardDeskInterface } from '../interfaces';
import { WIN_SCORE, STOP_DEALER_SCORE } from '../constants';

class GameService implements GameInterface {

    playerHand: HandsInterface;
    dealerHand: HandsInterface;
    cardsDeck: CardDeskInterface;
    playerWin: boolean;
    gameOver: boolean;

    constructor(cards: CardInterface[]) {
        this.playerWin = false;
        this.gameOver = false;
        this.cardsDeck = new CardDeckService(cards);
        this.playerHand = new HandsService([this.cardsDeck.getCard(), this.cardsDeck.getCard()]);
        this.dealerHand = new HandsService([this.cardsDeck.getCard()]);
    }

    hitPlayerCard() {
        const card = this.cardsDeck.getCard();
        this.playerHand.hitCard(card);

        if (this.playerHand.totalPoints >= WIN_SCORE) {
            this.playerPlayed();
        }
    }

    dealerNeedHitCard() {
        return this.dealerHand.totalPoints < STOP_DEALER_SCORE;
    }

    hitDealerCard() {
        const card = this.cardsDeck.getCard();
        this.dealerHand.hitCard(card);
    }

    getResults() {
        return {
            playerWin: this.playerWin,
            gameOver: this.gameOver,
            player: this.playerHand,
            dealer: this.dealerHand
        }
    }

    //TODO: possibly add case for game draw
    calculateResults() {
        const correctPlayerPointsAmmount = this.playerHand.totalPoints <= WIN_SCORE;
        const incorrectDealerPointsAmmount = this.dealerHand.totalPoints > WIN_SCORE;
        const playerWinAmmount = this.playerHand.totalPoints >= this.dealerHand.totalPoints;

        if (correctPlayerPointsAmmount && (incorrectDealerPointsAmmount || playerWinAmmount)) {
            this.playerWin = true;
        }

        this.gameOver = true;
    }

    playerPlayed() {
        while (this.dealerNeedHitCard()) {
            this.hitDealerCard();
        }

        this.calculateResults();
    }
}

export default GameService;