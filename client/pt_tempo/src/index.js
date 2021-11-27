import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MainState } from './context/state';

ReactDOM.render(
  <MainState>
    <App />
  </MainState>,
  document.getElementById('root')
);

