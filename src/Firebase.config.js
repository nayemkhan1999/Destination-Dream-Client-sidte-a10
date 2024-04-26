// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD54NikR-LF3_1_otHXW606mxbDifrU-uw",
  authDomain: "destination-dream-ebfea.firebaseapp.com",
  projectId: "destination-dream-ebfea",
  storageBucket: "destination-dream-ebfea.appspot.com",
  messagingSenderId: "500630196058",
  appId: "1:500630196058:web:6f6551135c1ec1b1e42d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
