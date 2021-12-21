import React, { useContext } from 'react'
import { AuthContext } from '../components/auth/authContext'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();

    localStorage.setItem('lastPath', JSON.stringify({name: location.pathname, search: location.search}) );

    return user.logged 
        ? children
        : <Navigate to="/login" />
}
