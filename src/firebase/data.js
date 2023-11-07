
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5wZSkiknZgOTjuW8R5PD8HjsoyjqYoys",
  authDomain: "patagoniainvesting2.firebaseapp.com",
  projectId: "patagoniainvesting2",
  storageBucket: "patagoniainvesting2.appspot.com",
  messagingSenderId: "980393687937",
  appId: "1:980393687937:web:6283a9d72a230c30098680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);