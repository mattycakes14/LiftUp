// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "confidential",
  projectId: "confidential",
  storageBucket: "confidential",
  messagingSenderId: "confidential",
  appId: "confidential",
  measurementId: "confidential",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
