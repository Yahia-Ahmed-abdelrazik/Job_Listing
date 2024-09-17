// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs331AgGLLNnMYGtP7iUNEK1zPw_67d9Q",
  authDomain: "job-listing-fa1c4.firebaseapp.com",
  projectId: "job-listing-fa1c4",
  storageBucket: "job-listing-fa1c4.appspot.com",
  messagingSenderId: "619667141440",
  appId: "1:619667141440:web:2e15a0b93495ec572580a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
