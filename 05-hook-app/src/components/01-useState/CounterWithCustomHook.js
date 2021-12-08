import React from 'react'
import useCounter from '../hooks/useCounter'
import './counter.css'

function CounterWithCustomHook() {

    const {state:counter, increment, decrement, reset} = useCounter(5);

    return (
        <>
              <h1>Counter with Hook: { counter }</h1>
              <hr />

              <button className="btn" onClick={
                  () => { increment() }
              } > + 1 </button>
              <button className="btn" onClick={
                  () => { reset() }
              } > reset </button>
              <button className="btn" onClick={
                  () => { decrement() }
              }> - 1 </button>
        </>
    )
}

export default CounterWithCustomHook
