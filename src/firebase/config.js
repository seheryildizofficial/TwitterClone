// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmjgEOFagquARhgUg38SG3SqmjxSH8Cs",
  authDomain: "twitter-clone-6273a.firebaseapp.com",
  projectId: "twitter-clone-6273a",
  storageBucket: "twitter-clone-6273a.appspot.com",
  messagingSenderId: "121437588729",
  appId: "1:121437588729:web:1d238f680b999ec0aea628",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth yapısının referansını alma
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//veritabanı referansını al
export const db = getFirestore(app);
