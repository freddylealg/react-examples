import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>LogingScreen</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>

            <button 
                className='btn btn-primary'
                onClick={ () => {
                    setUser({
                        id: '1234',
                        name: 'Freddy Leal',
                        email: 'freddy.alejandro.leal@gmail.com'
                    })
                }}
            >Login</button>
        </div>
    )
}
