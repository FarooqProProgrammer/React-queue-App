// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB37zFc-_m20TpYh-HpRDtQ2B0piZNAY_g",
  authDomain: "whatsapp-87670.firebaseapp.com",
  projectId: "whatsapp-87670",
  storageBucket: "whatsapp-87670.appspot.com",
  messagingSenderId: "298384279712",
  appId: "1:298384279712:web:4bc83397b6a408d56ae1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth ,
    db
}