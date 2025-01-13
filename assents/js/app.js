// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCRTbEqWuP_y_xYYGgzYf8QAHAbQL-Dntk",
  authDomain: "spotmusic-fe00f.firebaseapp.com",
  projectId: "spotmusic-fe00f",
  storageBucket: "spotmusic-fe00f.firebasestorage.app",
  messagingSenderId: "78438616719",
  appId: "1:78438616719:web:4f4ca5f35da74be388eafa",
  measurementId: "G-XVELD4F6M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Google Authentication provider
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Get user info
            const user = result.user;
            console.log("User signed in:", user.displayName);
            console.log("User email:", user.email);
            console.log("User UID:", user.uid);
            
            // Redirect or update UI after successful sign-in
            window.location.href = "home.html";  // Example: redirect to home page
        })
        .catch((error) => {
            console.error("Error during sign-in:", error.message);
        });
}

// Attach the sign-in function to the button in HTML
document.getElementById("google-sign-in-button").addEventListener("click", signInWithGoogle);
