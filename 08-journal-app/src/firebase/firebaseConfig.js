import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBgzFOkJngcbsMaz-4eAO7_x6ah_svHX1A",
    authDomain: "react-app-journal-16dba.firebaseapp.com",
    projectId: "react-app-journal-16dba",
    storageBucket: "react-app-journal-16dba.appspot.com",
    messagingSenderId: "358208186628",
    appId: "1:358208186628:web:570e9ba7ef6cc7ffde4851"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db, 
    googleAuthProvider
}