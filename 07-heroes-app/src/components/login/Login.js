import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';
 
export const Login = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Freddy Leal Loged'
            }
        }
        dispatch( action );

        const {name, search} = JSON.parse(localStorage.getItem('lastPath')) || {name:'/marvel'}
        const lastPath = name + (search?search:'');
        navigate(lastPath, { replace: true });
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
