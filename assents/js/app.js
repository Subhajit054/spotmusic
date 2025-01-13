// Placeholder function for search functionality
function searchSongs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const songs = document.querySelectorAll('.song');
    
    songs.forEach(song => {
        const title = song.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            song.style.display = 'block';  // Show song
        } else {
            song.style.display = 'none';  // Hide song
        }
    });
}
// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign up function
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert('User signed up successfully');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('User logged in successfully');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

// Firebase listener for user authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in: ', user.email);
    } else {
        console.log('No user is logged in');
    }
});
