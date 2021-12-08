import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    const [counterObj, setCounter] = useState({
        count1: 0,
        count2: 10,
        count3: 20,
        count4: 30,
    });

    const {count1, count2} = counterObj;

    return (
        <>
            <h1>Counter1 { count1 }</h1>
            <h1>Counter2 { count2 }</h1>
            <hr />
            <button className="btn btn-primary" 
                onClick={
                    () => {setCounter( {...counterObj, count1: count1 + 1} )}
                } 
            >+1</button>
        </>
    )
}
