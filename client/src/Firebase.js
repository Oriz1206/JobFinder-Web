// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7Q5aHTuqrTjKM1Vvu6wj0LTrXtd1DjP4",
  authDomain: "kltn2-308e5.firebaseapp.com",
  databaseURL: "https://kltn2-308e5-default-rtdb.firebaseio.com",
  projectId: "kltn2-308e5",
  storageBucket: "kltn2-308e5.appspot.com",
  messagingSenderId: "226060437319",
  appId: "1:226060437319:web:760170e799cba3de34ee62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
