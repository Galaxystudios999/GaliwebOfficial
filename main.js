import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// 1. Import Email/Password Auth tools from the CDN
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);


let LoginButton = document.getElementById("LoginButton");
let LoginDetails = document.querySelector(".LoginDetails");
let SubmitButton = document.getElementById("SubmitButton"); 
let emailInput = document.getElementById("Email");
let passwordInput = document.getElementById("Password");

export let IsLoggedIn = false;


LoginButton.addEventListener("touchstart", (e) => {
  e.preventDefault;
  LoginDetails.style.visibility = "visible";
});

SubmitButton.addEventListener("touchstart", (e) => {
  e.preventDefault;
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in user:", user.email);
      
      LoginDetails.style.visibility = "hidden";
      LoginButton.style.visibility = "hidden";
      IsLoggedIn = true; 
      
      alert("Successfully logged in!");
    })
    .catch((error) => {
      
      console.error("Login failed:", error.message);
      alert(error.message);
    });
});