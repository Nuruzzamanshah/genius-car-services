// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrU2Tt3jxKYi0rWBkO9xPqcJDQ8nnbpJ4",
  authDomain: "genius-car-services-ba17e.firebaseapp.com",
  projectId: "genius-car-services-ba17e",
  storageBucket: "genius-car-services-ba17e.appspot.com",
  messagingSenderId: "297072976650",
  appId: "1:297072976650:web:5fcc577d84082488edd0f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;