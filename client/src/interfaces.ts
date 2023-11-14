export interface ButtonProps {
    title: string;
    callback?: () => any;
    className: string;
}

export interface Card {
    rank: string;
    suit: string;
    points: number;
}

interface Hand {
    cards: Card[],
    pointsTotal: number
}

export interface HandsProps {
    playerHand: boolean;
    gameOver?: boolean;
    hand: Hand;
    startGame?: () => Promise<void>;
    hitCard?: () => Promise<void>;
    stand?: () => Promise<void>;
}

export interface CardProps {
    card: Card;
}

export interface GameInfoProps {
    gameOver: boolean;
    playerWin: boolean;
    playerScore: number;
}

export interface Game {
    gameOver: boolean;
    playerWin: boolean;
    player: {
        cards: Card[]
        totalPoints: number;
    }
    dealer: {
        cards: Card[]
        totalPoints: number;
    }
}

export interface GameResults {
    data: Game;
}