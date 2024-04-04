// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB7Q4zY9N-0Hn-UHP4fiTZhSy0ZV8ASCY",
  authDomain: "techykoder-9e76b.firebaseapp.com",
  projectId: "techykoder-9e76b",
  storageBucket: "techykoder-9e76b.appspot.com",
  messagingSenderId: "1090566859282",
  appId: "1:1090566859282:web:55ab97eaa8bfade58206cb",
  measurementId: "G-DQVL7HPTHS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
