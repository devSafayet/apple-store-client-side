// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpkR83RFraZUlSgJi9NTXFngy9XTxuafI",
    authDomain: "apple-store-2e0bc.firebaseapp.com",
    projectId: "apple-store-2e0bc",
    storageBucket: "apple-store-2e0bc.appspot.com",
    messagingSenderId: "175889613405",
    appId: "1:175889613405:web:c94ffa79e138625a39c3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;