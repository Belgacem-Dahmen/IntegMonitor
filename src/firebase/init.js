
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAReWy6DdGpmo8ofiOTlg5Y8ZjKerzm7LU",
    authDomain: "integmonitor.firebaseapp.com",
    projectId: "integmonitor",
    storageBucket: "integmonitor.appspot.com",
    messagingSenderId: "462317366126",
    appId: "1:462317366126:web:7c51e9245cd1699a95af7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default (db , app)