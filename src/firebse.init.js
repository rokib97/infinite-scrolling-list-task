// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfl7tJtpmyjzwjvUiF6GZneZlFk6Q8q10",
  authDomain: "infinite-scrolling-f012b.firebaseapp.com",
  projectId: "infinite-scrolling-f012b",
  storageBucket: "infinite-scrolling-f012b.appspot.com",
  messagingSenderId: "1030086101762",
  appId: "1:1030086101762:web:8f51b1d2ba924d8a46501b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
