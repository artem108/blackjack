import HandsService from '../src/services/HandsService';

const cardsMock = [
    { "rank": "2", "suit": "hearts", "points": 2 },
    { "rank": "3", "suit": "hearts", "points": 3 },
    { "rank": "K", "suit": "hearts", "points": 10 },
    { "rank": "A", "suit": "hearts", "points": 11 },
];

describe("HandsService:", () => {
    let handsService: HandsService | { [key: string]: any } = {};

    beforeAll(() => {
        handsService = new HandsService([cardsMock[0], cardsMock[1]]);
    })

    afterAll(() => {
        handsService = {};        
    })

    test("HandsService should have two cards after initiation", () => {
        expect(handsService.cards.length).toBe(2);
    });

    test("hitCard should add passed card to cards", () => {
        handsService.hitCard(cardsMock[2])

        expect(handsService.cards.length).toBe(3);
    });

    test("handleAce should handle and set Ace point to 1", () => {
        const aceCard = handsService.handleAce(cardsMock[3])

        expect(aceCard.points).toBe(1);
    });
})
