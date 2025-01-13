// Initialize Firebase (use your Firebase config here)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Upload song to Firebase Storage
function uploadSong() {
    const songFile = document.getElementById('songFile').files[0];
    const songTitle = document.getElementById('songTitle').value;
    const artistName = document.getElementById('artistName').value;

    const storageRef = storage.ref('songs/' + songFile.name);
    const uploadTask = storageRef.put(songFile);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Progress logic (optional)
        },
        (error) => {
            alert('Error uploading file: ' + error.message);
        },
        () => {
            alert('Song uploaded successfully');
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('Song available at: ' + downloadURL);
                // Optionally save this URL in your database
            });
        }
    );
}
