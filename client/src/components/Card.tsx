import React, { FC } from 'react';
import { CardProps } from '../interfaces';

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <span className="cardRank">{card.rank}</span>
        <img src={require(`../assets/${card.suit}.png`)} alt={card.suit} className="cardSuitImage"/>
      </div>
    </div>
  );
}

export default Card;
