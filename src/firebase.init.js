// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-2PvsLo6TqwI3hERP6amllgIcIfaIBwc",
    authDomain: "apple-store-abe66.firebaseapp.com",
    projectId: "apple-store-abe66",
    storageBucket: "apple-store-abe66.appspot.com",
    messagingSenderId: "527085197595",
    appId: "1:527085197595:web:26fd3149929b97bd11dbbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;