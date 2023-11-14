import React, { useState } from 'react';
import Hands from './components/Hands';
import Button from './components/Button';
import GameInfo from './components/GameInfo';
import { getNewGame, hitPlayerCard, playerStand } from './api/index'
import { GameResults, Game } from './interfaces'

const GameContainer = () => {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [game, setGame] = useState<Game | {[key:string] : any}>({gameOver:false});

  const { dealer, gameOver, playerWin, player} = game;

  const startGame = async () => {
    const { data } = await getNewGame() as GameResults;

    setGame(data);
    setGameStart(true);
  };

  const hitCard = async () => {
    const { data } = await hitPlayerCard(game.id) as GameResults;

    setGame((prevState: any) => ({
      ...prevState, 
      ...data
    })); 
  };

  const stand = async () => {
    const { data } = await playerStand(game.id) as GameResults;
    
    setGame((prevState: any) => ({
      ...prevState, 
      ...data
    }));  
  };

  return (
    <div className="gameContainer">
      {
        !gameStart &&
          <Button
            callback={startGame}
            title={'Start'}
            className={"hit startGameBtn"}
          />
      }
      {
        gameStart &&
        <>
            <Hands 
              playerHand={false} 
              hand={dealer}
            />
            <GameInfo 
                gameOver={gameOver}
                playerWin={playerWin}
                playerScore={player.totalPoints}
                dealerScore={dealer.totalPoints}
            />
            <Hands 
              playerHand={true} 
              hand={player}
              gameOver={gameOver}
              hitCard={hitCard} 
              stand={stand} 
              startGame={startGame}
            />
        </>
      }
    </div>
  );
}

export default GameContainer;
