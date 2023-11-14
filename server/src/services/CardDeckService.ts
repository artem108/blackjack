import { CardDeskInterface, CardInterface } from '../interfaces';

class CardDeckService implements CardDeskInterface {

    cards: CardInterface[];

    constructor(cards: CardInterface[]) {        
        this.cards = cards
    }

    getCard(): CardInterface {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const card = this.cards[randomIndex];
        this.cards.splice(randomIndex, 1);

        return card;
    }
}

export default CardDeckService;