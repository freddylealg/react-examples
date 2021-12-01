import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

const rootDiv = document.getElementById('root');
ReactDOM.render(<PrimeraApp saludo2="Hola, soy Freddy" />, rootDiv);