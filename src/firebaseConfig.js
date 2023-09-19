// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8NPlLcaNkNBXkQCvsIahtdEDshZX9Kc0",
    authDomain: "ecomm-practice1.firebaseapp.com",
    projectId: "ecomm-practice1",
    storageBucket: "ecomm-practice1.appspot.com",
    messagingSenderId: "792808423517",
    appId: "1:792808423517:web:3b5c1b04981abff8898db4",
    measurementId: "G-4B1F3N8LC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);//auth is instanse of app
export const db = getFirestore(app)
export default app;
