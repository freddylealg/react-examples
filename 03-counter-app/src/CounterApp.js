import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value=0}) => {
    
    const [count, setValue] = useState(value);

    // cambio directo
    const handleAdd = () => {
        setValue(count + 1);
    }

    const handleReset = () => {
        setValue( value );
    }

    // cambio con función
    const handleSubtrat = () => {
        setValue( (count) => count - 1 );
    }

    return (
        <div>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>

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