import React, { useEffect, useState } from 'react';
import './effects.css';
import {Message} from './Message';

function SimpleForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    const handleInput = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    useEffect(() => {
        console.log('Hey!')
    }, [])

    useEffect(() => {
        console.log('Cambio el formulario!')
    }, [formState])

    useEffect(() => {
        console.log('Cambio el email!')
    }, [email])


    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInput }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu Email"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInput }
                />
            </div>

            { (name==='123') && <Message /> }
        </>
    )
}

export default SimpleForm
