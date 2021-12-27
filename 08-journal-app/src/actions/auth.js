import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then( ({user}) => {
                dispatch( login(user.uid, user.displayName) )
                dispatch( finishLoading() );
            })
            .catch( (error) => {
                dispatch( finishLoading() );
                Swal.fire('Fail', error.message, 'error')
            })
    }
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
    const auth = getAuth();
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then( async ({user}) => {
                await updateProfile(user, { displayName: name });
                console.log( user )
                dispatch( login(user.uid, user.displayName) );
            })
            .catch( e => {
                console.log( e );
                Swal.fire('Fail', e.message, 'error')
            });
    }
}


export const startGoogleLogin = () =>{
    const auth = getAuth();
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then( ({user}) =>{
                dispatch(login(user.uid, user.displayName))
            })
            .catch((error) => {
                console.log( error )
            });
    }
}   


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth()
        await auth.signOut();
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})