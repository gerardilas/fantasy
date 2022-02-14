import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyClpG3ZHTR4_tw2Cpq726sk7EdmehgHVZQ",
    authDomain: "cool-micro.firebaseapp.com",
    projectId: "cool-micro",
    storageBucket: "cool-micro.appspot.com",
    messagingSenderId: "236561515871",
    appId: "1:236561515871:web:810d2ffa68f56ad57da2ea",
    measurementId: "G-RY8WF5VT5P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);