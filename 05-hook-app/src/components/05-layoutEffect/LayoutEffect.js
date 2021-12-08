import React, { useLayoutEffect, useRef } from 'react'
import './custom.css'
import useCounter from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const LayoutEffect = () => {
    const {state:counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0]

    const pTag = useRef();
    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() )
        console.log('Hey')
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <figure className="custom-text-right">
                <blockquote className="blockquote">
                    <p ref={pTag} >{ quote }</p>
                </blockquote>
            </figure>

            <button 
                className="btn btn-primary" 
                onClick={ () => increment() } 
            > Siguiente Quote </button>
            <p>{ counter }</p>

        </div>
    )
}
