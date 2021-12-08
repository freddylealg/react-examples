import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import './custom.css'
import { Small } from './Small';

export const Memorize = () => {

    const {state:counter, increment} = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize <Small value={ counter } /> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            > +1 </button>
            
            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => { setShow( !show ) } }
            > Show/Hide :{ JSON.stringify(show) } </button>
        </div>
    )
}
