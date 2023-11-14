import GameService from '../src/services/GameService';
import { WIN_SCORE, STOP_DEALER_SCORE } from '../src/constants';

const cardsMock = [
    { "rank": "2", "suit": "hearts", "points": 2 },
    { "rank": "3", "suit": "hearts", "points": 3 },
    { "rank": "4", "suit": "hearts", "points": 4 },
    { "rank": "5", "suit": "hearts", "points": 5 },
    { "rank": "6", "suit": "hearts", "points": 6 },
    { "rank": "7", "suit": "hearts", "points": 7 },
    { "rank": "8", "suit": "hearts", "points": 8 },
    { "rank": "9", "suit": "hearts", "points": 9 },
    { "rank": "10", "suit": "hearts", "points": 10 },
    { "rank": "J", "suit": "hearts", "points": 10 },
    { "rank": "Q", "suit": "hearts", "points": 10 },
    { "rank": "K", "suit": "hearts", "points": 10 },
    { "rank": "A", "suit": "hearts", "points": 11 },
];

describe("Creating new game model:", () => {
    let gameService: GameService | { [key: string]: any } = {};

    beforeAll(() => {
        gameService = new GameService([...cardsMock]);
    })

    afterAll(() => {
        gameService = {};        
    })

    test("Player should have two cards when game started", () => {
        const playerHand = gameService.playerHand.cards;

        expect(playerHand.length).toBe(2);
    });

    test("Dealer should have one card when game started", () => {
        const dealerHand = gameService.dealerHand.cards;

        expect(dealerHand.length).toBe(1);
    });

    test("hitPlayerCard should add one more card to player's cards", () => {
        gameService.hitPlayerCard();
        const playerHand = gameService.playerHand.cards;

        expect(playerHand.length).toBe(3);
    });

    test("playerPlayed should add cards to dealer's hand till reach STOP_DEALER_SCORE", () => {
        gameService.playerPlayed();
        const dealerHand = gameService.dealerHand.cards;
        const dealerPoints = gameService.dealerHand.totalPoints;

        expect(dealerHand.length).toBeGreaterThanOrEqual(2);
        expect(dealerPoints).toBeGreaterThanOrEqual(STOP_DEALER_SCORE);
    });

    test("calculateResults should correctly calculate game result", () => {
        const correctPlayerPointsAmmount = gameService.playerHand.totalPoints <= WIN_SCORE;
        const incorrectDealerPointsAmmount = gameService.dealerHand.totalPoints > WIN_SCORE;
        const playerWinAmmount = gameService.playerHand.totalPoints >= gameService.dealerHand.totalPoints;
        const playerWin = correctPlayerPointsAmmount && (incorrectDealerPointsAmmount || playerWinAmmount);

        expect(playerWin).toBe(gameService.playerWin);
    });
})