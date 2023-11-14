import React, { FC } from 'react';
import { ButtonProps } from '../interfaces';

const Button: FC<ButtonProps> = ({title, callback, className}) => {
  return (
    <div className="buttonContainer">
        <button onClick={callback} className={`button ${className}`}>{title}</button>
    </div>
  );
}

export default Button;
