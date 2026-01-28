// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFXBAJEyLTOIIfVPA_XfXkWKih15rnV1Q",
  authDomain: "exclusive-shop-39829.firebaseapp.com",
  projectId: "exclusive-shop-39829",
  storageBucket: "exclusive-shop-39829.firebasestorage.app",
  messagingSenderId: "881860441136",
  appId: "1:881860441136:web:9fd1ab5295f2fdb498e9f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)