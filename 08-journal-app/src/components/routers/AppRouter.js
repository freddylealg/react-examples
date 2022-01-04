import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import { login } from '../../actions/auth';
import { startLoadingNotes } from '../../actions/notes';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getAuth().onAuthStateChanged( (user) => {
            if( user?.uid ) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
                dispatch( startLoadingNotes(user.uid) )
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if( checking ){
        return (
            <h3>Loading...</h3>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLoggedIn } />
                    <PrivateRoute exact path="/" component={ JournalScreen } isAuthenticated={ isLoggedIn } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
