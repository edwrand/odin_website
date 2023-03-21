// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcyWJBzvj6F9J9I_rWcyODRHWKwo3Gnqk",
    authDomain: "personal-website-29395.firebaseapp.com",
    projectId: "personal-website-29395",
    storageBucket: "personal-website-29395.appspot.com",
    messagingSenderId: "212676964559",
    appId: "1:212676964559:web:ce96df04ecb7fb8e0fc7ba",
    measurementId: "G-EVQY1K0JSG",
    databaseURL: "https://personal-website-29395-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

import { ref, set } from "firebase/database";

function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
}

writeUserData(1, 'ebby', 'ebby@gmail.com');