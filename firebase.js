// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
    measurementId: "G-EVQY1K0JSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

