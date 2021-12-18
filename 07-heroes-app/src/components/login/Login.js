import React from 'react';
import { useNavigate } from 'react-router-dom';
 
export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', { replace: true });
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ handleLogin }
            > Login </button>
        </div>
    )
}
