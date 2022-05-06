// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjNnubp5yUFbsTsRNIPVScB2tBkHDWJLQ",
    authDomain: "car-inventory-6dae5.firebaseapp.com",
    projectId: "car-inventory-6dae5",
    storageBucket: "car-inventory-6dae5.appspot.com",
    messagingSenderId: "111829076490",
    appId: "1:111829076490:web:8951284889f9279a67adf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;