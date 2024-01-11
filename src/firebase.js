// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {GoogleAuthProvider , getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQBK2b0MVT-V782sP0WprVB0z4Flqy8SE",
  authDomain: "pomodorotime-bf9e5.firebaseapp.com",
  projectId: "pomodorotime-bf9e5",
  storageBucket: "pomodorotime-bf9e5.appspot.com",
  messagingSenderId: "371551588221",
  appId: "1:371551588221:web:0d25fedc5f914d27d34614"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider(); 