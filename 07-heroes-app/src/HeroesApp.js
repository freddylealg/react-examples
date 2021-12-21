import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/authContext'
import { authReducer } from './components/auth/authReducer'
import { AppRouters } from './routers/AppRouters'


const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || {logged: false}
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer( authReducer, {}, init );

    useEffect( () => {
        console.log('Actualización del usuario', user);
        localStorage.setItem('user', JSON.stringify(user) )
    }, [user]);

    return (
        <AuthContext.Provider value={{user, dispatch}} >
            <AppRouters />
        </AuthContext.Provider>
    )
}
