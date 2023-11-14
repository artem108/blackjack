import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import GameContainer from './GameContainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GameContainer />
  </React.StrictMode>
);