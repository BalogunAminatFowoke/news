import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/store';

const config =
{
    apiKey: "AIzaSyB5GiT5FWoOAk4eeqzXXu2NAxcvlFTlYOk",
    authDomain: "newsapp-db.firebaseapp.com",
    projectId: "newsapp-db",
    storageBucket: "newsapp-db.appspot.com",
    messagingSenderId: "1064570236556",
    appId: "1:1064570236556:web:437f56bf676a9377bf15a9",
    measurementId: "G-1T9N2HFZ9J"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
//export const firebasestore = firebase.store();

const providerr = new firebase.auth.GoogleAuthProvider();
providerr.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(providerr)

