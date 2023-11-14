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
            <div className="buttons">
                {
                    playerHand && !gameOver && <>
                        <Button callback={hitCard} title={'HIT'} className={"hit"} />
                        <Button callback={stand} title={'STAND'} className={"stand"} />
                </>}
                {
                    playerHand && gameOver &&
                    <Button
                        callback={startGame}
                        title={'Start new game'}
                        className={"hit"}
                    />
                }
             </div>
        </div>
    );
}

export default Hands;
