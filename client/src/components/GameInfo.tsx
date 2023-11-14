import React, { FC } from 'react';
import { GameInfoProps } from '../interfaces';

const GameInfo: FC<GameInfoProps> = ({ gameOver, playerWin, playerScore }) => {
  return (
    <div className="gameInfo">
      {
        gameOver
          ? <span>{playerWin ? 'You win!' : 'You loose!'}</span>
          : <span>Your score: {playerScore}</span>
      }
    </div>
  );
}

export default GameInfo;
