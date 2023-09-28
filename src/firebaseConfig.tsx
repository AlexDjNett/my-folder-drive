// Import the functions you need from the SDKs you need
"use client";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAewbmPetAwu0cIoADPTbSo60TS9i5o8Qs",
  authDomain: "own-drive-me.firebaseapp.com",
  projectId: "own-drive-me",
  storageBucket: "own-drive-me.appspot.com",
  messagingSenderId: "172524684733",
  appId: "1:172524684733:web:9df3c1a3321b67e7e97ed4",
};

// console.log(process.env.FIREBASE_API_KEY);
// console.log(process.env.FIREBASE_AUTH_DOMAIN);
// console.log(process.env.FIREBASE_PROJECT_ID);
// console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE);
// console.log(process.env.FIREBASE_MESSAGING_SENDER_ID);
// console.log(process.env.FIREBASE_APP_ID);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
