import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbbW1QS5za3-yMiXORmRcZOHpd8M79gRw",
  authDomain: "moviehub-a482b.firebaseapp.com",
  projectId: "moviehub-a482b",
  storageBucket: "moviehub-a482b.firebasestorage.app",
  messagingSenderId: "900979858528",
  appId: "1:900979858528:web:54357e92d5d85a5c6d7705",
  measurementId: "G-1TKD8B59DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



