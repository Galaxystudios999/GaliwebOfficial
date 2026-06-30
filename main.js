import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; 

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
const db = getFirestore(app);

async function saveUserPreference(tabName) {
    const user = auth.currentUser;
    
    if (user) {
        try {
            await setDoc(doc(db, "users", user.uid), {
                lastSelectedTab: tabName,
                savedAt: new Date()
            }, { merge: true }); 
            console.log(`Saved ${tabName} choice to ${user.email}`);
        } catch (error) {
            console.error("Error saving preference: ", error);
        }
    } else {
        console.log("No user is logged in. Saving locally to localStorage instead.");
        localStorage.setItem("selectedTab", tabName);
    }
}

let LoginButton = document.getElementById("LoginButton");
let LoginDetails = document.querySelector(".LoginDetails");
let SubmitButton = document.getElementById("SubmitButton"); 
let emailInput = document.getElementById("Email");
let passwordInput = document.getElementById("Password");

export let IsLoggedIn = false;

LoginButton.addEventListener("click", (e) => {
  LoginDetails.style.display = "flex"; 
});

SubmitButton.addEventListener("click", (e) => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in user:", user.email);
      
      const localTab = localStorage.getItem("selectedTab") || "For You";
      saveUserPreference(localTab); 
      
      LoginDetails.style.display = "none";
      LoginButton.style.display = "none";
      IsLoggedIn = true; 
      
      alert("Successfully logged in!");
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
      alert(error.message);
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User detected on load:", user.email);
        IsLoggedIn = true;
        
        LoginButton.style.display = "none";     
        LoginDetails.style.display = "none";
    } else {
        console.log("No active session found.");
        IsLoggedIn = false;
        
        LoginButton.style.display = "block";
        LoginDetails.style.display = "none"; 
    }
});