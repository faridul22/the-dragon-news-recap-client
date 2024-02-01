// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC8KVjHfjoKCsf-mAeGeKTs37nfUZR5wY",
    authDomain: "the-news-dragon-recap-b5c29.firebaseapp.com",
    projectId: "the-news-dragon-recap-b5c29",
    storageBucket: "the-news-dragon-recap-b5c29.appspot.com",
    messagingSenderId: "605501091222",
    appId: "1:605501091222:web:dc06861f53551360d2c1b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;