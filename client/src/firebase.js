// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-714d6.firebaseapp.com",
  projectId: "mern-estate-714d6",
  storageBucket: "mern-estate-714d6.appspot.com",
  messagingSenderId: "627391461346",
  appId: "1:627391461346:web:71e2fc9ea984e53794ebbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);