import * as firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBWhWMYkSFpkVOPkfOThTd1D-uis4iHek4",
    authDomain: "to-do-list-9a610.firebaseapp.com",
    databaseURL: "https://to-do-list-9a610.firebaseio.com",
    projectId: "to-do-list-9a610",
    storageBucket: "to-do-list-9a610.appspot.com",
    messagingSenderId: "471667296767",
    appId: "1:471667296767:web:b940086131890833b6ffca",
    measurementId: "G-F2XQMV1RSB"  
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();