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

export const playerStand = async (id: string): Promise<GameResults | void> => {
    try {
        const response = await axios.get(`/game/player-stand/${id}`);
        return response;
    } catch (error) {
        console.error(error);        
    }
};

export const hitPlayerCard = async (id: string): Promise<GameResults | void> => {
    try {
        const response = await axios.get(`/game/hit-card/${id}`);
        return response;
    } catch (error) {
        console.error(error);        
    }
};