// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpo-6ItWaAYNvqb6fEXEG_-nYFogfyXhc",
//   authDomain: "vr-real-estate-5d102.firebaseapp.com",
//   projectId: "vr-real-estate-5d102",
//   storageBucket: "vr-real-estate-5d102.appspot.com",
//   messagingSenderId: "489302589145",
//   appId: "1:489302589145:web:18d92ee951bad47675c8c8",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8ktOnZsg3RU6KCHAyCkz8oe-SEtmtYs",
  authDomain: "house-marketplace-webapp-dcf62.firebaseapp.com",
  projectId: "house-marketplace-webapp-dcf62",
  storageBucket: "house-marketplace-webapp-dcf62.appspot.com",
  messagingSenderId: "592984157794",
  appId: "1:592984157794:web:8b7d0ca92f3285f1162b3b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
