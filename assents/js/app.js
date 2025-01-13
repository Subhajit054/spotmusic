// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase config
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
const auth = getAuth(app);

// Google Sign-In Provider
const provider = new GoogleAuthProvider();

// Sign-in button
document.getElementById('google-sign-in-button').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log("Signed in as:", user.displayName);
            updateUI(user);
        })
        .catch(error => {
            console.error("Sign-in error:", error);
        });
});

// Sign-out button
document.getElementById('google-sign-out-button').addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log("User signed out");
            resetUI();
        })
        .catch(error => {
            console.error("Sign-out error:", error);
        });
});

// Auth state listener
onAuthStateChanged(auth, user => {
    if (user) {
        updateUI(user);
    } else {
        resetUI();
    }
});

// Function to update the UI after sign-in
function updateUI(user) {
    document.getElementById('google-sign-in-button').style.display = 'none';
    document.getElementById('google-sign-out-button').style.display = 'block';
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('user-name').innerText = user.displayName;
    document.getElementById('user-email').innerText = user.email;
}

// Function to reset the UI after sign-out
function resetUI() {
    document.getElementById('google-sign-in-button').style.display = 'block';
    document.getElementById('google-sign-out-button').style.display = 'none';
    document.getElementById('user-info').style.display = 'none';
}
