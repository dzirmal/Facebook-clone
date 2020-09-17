import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCClNp66p_GgJTQKLYeNc-pGf1namyBKew",
    authDomain: "facebook-clone-4c77e.firebaseapp.com",
    databaseURL: "https://facebook-clone-4c77e.firebaseio.com",
    projectId: "facebook-clone-4c77e",
    storageBucket: "facebook-clone-4c77e.appspot.com",
    messagingSenderId: "302634796256",
    appId: "1:302634796256:web:77bdaf11efd22b0baf7c85",
    measurementId: "G-DJKDSD3BQT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;