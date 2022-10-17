// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZCkgsMlDV3Qt485V1pHF6ecuaSIVFT54",
    authDomain: "email-password-auth-d573e.firebaseapp.com",
    projectId: "email-password-auth-d573e",
    storageBucket: "email-password-auth-d573e.appspot.com",
    messagingSenderId: "357087692836",
    appId: "1:357087692836:web:034bfc6caab105876ef0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;