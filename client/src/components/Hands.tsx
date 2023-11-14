import React, { FC } from 'react';
import Card from './Card';
import Button from './Button';
import { HandsProps } from '../interfaces';

const Hands: FC<HandsProps> = ({ 
    hitCard, 
    stand, 
    playerHand, 
    hand, 
    gameOver, 
    startGame 
}) => {
    return (
        <div className="handsContainer">
            <div className="cards">
                {
                    hand.cards.map((card, index) => {
                        return <Card key={index} card={card} />
                    })
                }
                {
                    !playerHand &&  hand.cards.length === 1 && 
                    <div className="cardContainer cardContent hiddenBg"></div>
                }
            </div>
            {
                playerHand && !gameOver &&
                 <div className="buttons">
                    <Button callback={hitCard} title={'HIT'} className={"hit"} />
                    <Button callback={stand} title={'STAND'} className={"stand"} />
                </div>
            }
            {
                playerHand && gameOver &&
                <Button
                    callback={startGame}
                    title={'Start new game'}
                    className={"hit"}
                />
            }
        </div>
    );
}

export default Hands;
