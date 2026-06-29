import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRWYKmIGoe2HSPXoZEqS6ZMv8yXhOSpt0",
  authDomain: "galiwebofficial.firebaseapp.com",
  projectId: "galiwebofficial",
  storageBucket: "galiwebofficial.firebasestorage.app",
  messagingSenderId: "557474388025",
  appId: "1:557474388025:web:47f32240f51de3199f15e8",
  measurementId: "G-RX5VVJT4KE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);