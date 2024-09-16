import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAM3vJLiuWR5CrkL_DZUCiA5fpEHjZ8J6Y",
  authDomain: "uspace-26464.firebaseapp.com",
  projectId: "uspace-26464",
  storageBucket: "uspace-26464.appspot.com",
  messagingSenderId: "544229729344",
  appId: "1:544229729344:web:9c52f2dd9e147e15046ba5",
  measurementId: "G-8Q4GYKLF71",
};
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();
export const database = getFirestore();
