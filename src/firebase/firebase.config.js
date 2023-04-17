// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwQoREYzEu5_vG6-9LW5cJyNBFH-UzMqQ",
  authDomain: "auth-firebase-context-ta-8df31.firebaseapp.com",
  projectId: "auth-firebase-context-ta-8df31",
  storageBucket: "auth-firebase-context-ta-8df31.appspot.com",
  messagingSenderId: "968501576027",
  appId: "1:968501576027:web:0f7649f7e12341e72b9a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app