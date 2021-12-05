import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

import './index.css';

const rootDiv = document.getElementById('root');
// ReactDOM.render(<PrimeraApp saludo="Hola, Freddy"/>, rootDiv);
ReactDOM.render(<CounterApp value="15" />, rootDiv);