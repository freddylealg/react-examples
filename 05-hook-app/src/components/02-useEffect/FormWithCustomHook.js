import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import './effects.css';

function FormWithCustomHook() {

    const [formState, setFormState] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formState;

    useEffect(() => {
        console.log('El email cambio')
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formState );
    }

    return (
        <form onSubmit={handleSubmit} >
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { setFormState }
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
                    onChange= { setFormState }
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    autoComplete="off"
                    value={ password }
                    onChange= { setFormState }
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

export default FormWithCustomHook
