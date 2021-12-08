import React, { useCallback, useEffect, useState } from 'react'
import './custom.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setcounter] = useState(10)

    const increment = useCallback(
        (number) => { 
            setcounter( c => c + number ); 
        }, [ setcounter ]
    )

    useEffect(() => {
        // código generado cada vez que se renderece la función superior
    }, [increment])

    return (
        <>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </>
    )
}
