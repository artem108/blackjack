import React, { FC } from 'react';
import { GameInfoProps } from '../interfaces';

const GameInfo: FC<GameInfoProps> = ({ gameOver, playerWin, playerScore, dealerScore }) => {
  return (
    <div className="gameInfo">
      {
        gameOver
          ? <span>{playerWin ? 'You win!' : 'You loose!'}</span>
          : <>
            <div>Dealer score: {dealerScore}</div>
            <div>Your score: {playerScore}</div>
          </>
      }
    </div>
  );
}

export default GameInfo;
