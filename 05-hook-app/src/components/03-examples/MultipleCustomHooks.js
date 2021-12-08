import React from 'react'
import useCounter from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import './multiple.css'

export const MultipleCustomHooks = () => {
    const {state:counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote, series } = !!data && data[0]

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div>
                    )
                :
                    (
                        <figure className="custom-text-right">
                            <blockquote className="blockquote">
                                <p>{ quote }</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                { author } in <cite title="Source Title">{ series }</cite>
                            </figcaption>
                        </figure>
                    )
            }

            <button 
                className="btn btn-primary" 
                onClick={ () => increment() } 
            > Siguiente Quote </button>
            <p>{ counter }</p>

        </div>
    )
}
