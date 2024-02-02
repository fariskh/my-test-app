// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpG5YmeDFrCOAedJJoSYNHbX-Bb0gQkO4",
  authDomain: "my-test-project-625a3.firebaseapp.com",
  projectId: "my-test-project-625a3",
  storageBucket: "my-test-project-625a3.appspot.com",
  messagingSenderId: "772606142072",
  appId: "1:772606142072:web:0664f6cf81bd964e0daf8d",
  measurementId: "G-38KK72HRQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);