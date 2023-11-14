import axios from 'axios';
import { GameResults } from '../interfaces'

export const getNewGame = async (): Promise<GameResults | void> => {
    try {
        const response = await axios.get('/game/new-game');
        return response;
    } catch (error) {
        console.error(error);        
    }
};

export const playerStand = async (): Promise<GameResults | void> => {
    try {
        const response = await axios.get('/game/player-stand');
        return response;
    } catch (error) {
        console.error(error);        
    }
};

export const hitPlayerCard = async (): Promise<GameResults | void> => {
    try {
        const response = await axios.get('/game/hit-card');
        return response;
    } catch (error) {
        console.error(error);        
    }
};