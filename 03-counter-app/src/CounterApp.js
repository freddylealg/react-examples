import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = () => {
    
    const [value, setValue] = useState(0);

    // cambio directo
    const handleAdd = () => {
        setValue(value + 1);
    }

    const handleReset = () => {
        setValue( 0 );
    }

    // cambio con función
    const handleSubtrat = () => {
        setValue( (value) => value - 1 );
    }

    return (
        <div>
        <h1>Counter App</h1>
        <h2>Count: {value}</h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubtrat }>-1</button>
        </div>
    );
}

CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp;