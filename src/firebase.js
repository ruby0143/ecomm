// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8G2YCbQLJON8gvTJmaxWzr1YFFQzXjM",
  authDomain: "e-comm-ee68b.firebaseapp.com",
  projectId: "e-comm-ee68b",
  storageBucket: "e-comm-ee68b.appspot.com",
  messagingSenderId: "329847667480",
  appId: "1:329847667480:web:12bad6ea96450df24b7c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }