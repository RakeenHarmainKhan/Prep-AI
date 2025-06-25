// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANdCPtekQpWsgAO9Kb2Ug7TDA1Jw5ZGdw",
    authDomain: "prepwise-833be.firebaseapp.com",
    projectId: "prepwise-833be",
    storageBucket: "prepwise-833be.firebasestorage.app",
    messagingSenderId: "580254756364",
    appId: "1:580254756364:web:1c37761fcc36dda6764829",
    measurementId: "G-7ZBYR0BSW4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);