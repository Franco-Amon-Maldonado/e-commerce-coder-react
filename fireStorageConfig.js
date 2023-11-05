// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQz1lXMmzaxWcaH2sxdw65W6Lsg_oSsw",
  authDomain: "ecommerce-react-coder-94779.firebaseapp.com",
  projectId: "ecommerce-react-coder-94779",
  storageBucket: "ecommerce-react-coder-94779.appspot.com",
  messagingSenderId: "297669941972",
  appId: "1:297669941972:web:035699360dc1f868e0b941"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)