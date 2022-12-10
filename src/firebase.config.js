// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB33p9wXkIcltvGdZ3kxIPMiUAyojCIXdY",
    authDomain: "eshop-56f49.firebaseapp.com",
    projectId: "eshop-56f49",
    storageBucket: "eshop-56f49.appspot.com",
    messagingSenderId: "1070840950049",
    appId: "1:1070840950049:web:7ed964326255f0507ca260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app