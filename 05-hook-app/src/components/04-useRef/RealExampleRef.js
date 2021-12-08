import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './custom.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> } 

            <button
                className="btn btn-primary mt-4"
                onClick={ () => {setShow(!show)} }
            >Hide/Show</button>
        </>
    )
}
