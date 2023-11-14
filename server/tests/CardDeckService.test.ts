import CardDeckService from '../src/services/CardDeckService';

const cardsMock = [
    { "rank": "2", "suit": "hearts", "points": 2 },
    { "rank": "3", "suit": "hearts", "points": 3 },
    { "rank": "K", "suit": "hearts", "points": 10 },
    { "rank": "A", "suit": "hearts", "points": 11 },
];

describe("CardDeckService:", () => {
    let cardDeckService: CardDeckService | { [key: string]: any } = {};

    beforeAll(() => {
        cardDeckService = new CardDeckService([...cardsMock]);
    })

    afterAll(() => {
        cardDeckService = {};        
    })

    test("getCard should return one card and delete this card from deck", () => {
        const card = cardDeckService.getCard();
        
        expect(cardDeckService.cards.length).toBe(cardsMock.length -1);
    });

})
