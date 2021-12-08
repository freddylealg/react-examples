import React, { useRef } from 'react'
import './custom.css'

const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-4"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
