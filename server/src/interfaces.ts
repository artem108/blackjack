export interface CardInterface {
    rank: string;
    suit: string;
    points: number;
}

export interface CardDeskInterface {
    cards: CardInterface[];
    getCard: () => CardInterface;
}

export interface HandsInterface {
    cards: CardInterface[];
    totalPoints: number;
    handleAce: (card: CardInterface) => CardInterface;
    hitCard: (card: CardInterface) => void;
}

export interface GameResults {
    playerWin: boolean;
    gameOver: boolean;
    dealer: HandsInterface;
    player: HandsInterface;
}

export interface GameInterface {
    playerHand: HandsInterface;
    dealerHand: HandsInterface;
    gameOver: boolean;
    playerWin: boolean;
    getResults: () => GameResults;
    calculateResults: () => void;
    hitPlayerCard: () => void;
    dealerNeedHitCard: () => boolean;
    hitDealerCard: () => void;
    playerPlayed: () => void;
}