import { HandsInterface, CardInterface } from '../interfaces';
import { ACE_RANK, WIN_SCORE } from '../constants';

class HandsService implements HandsInterface {

    cards: CardInterface[];
    totalPoints: number;

    constructor(cards: CardInterface[]) {
        this.cards = cards;        
        this.totalPoints = 0;
        this.cards.forEach((card) => {
            this.totalPoints = this.totalPoints + card.points;
        })
    }

    handleAce(card: CardInterface): CardInterface {
        if (card.rank === ACE_RANK) {
            card.points = (this.totalPoints + card.points) > WIN_SCORE ? 1 : card.points;
        }
        
        return card;
    }

    hitCard(card: CardInterface) {
        const updatedCard = this.handleAce(card);
        this.cards.push(updatedCard);
        this.totalPoints = this.totalPoints + updatedCard.points;
    }
}

export default HandsService;