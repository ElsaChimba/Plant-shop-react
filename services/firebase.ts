import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0T7UiZwvXwchcqNMIrSsUH3XlTWy6hTA",
  authDomain: "plant-shop-d9e3d.firebaseapp.com",
  projectId: "plant-shop-d9e3d",
  storageBucket: "plant-shop-d9e3d.firebasestorage.app",
  messagingSenderId: "653991652164",
  appId: "1:653991652164:web:d87ef75dc440e8cfaec511",
  measurementId: "G-KTZFLQ75MX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);