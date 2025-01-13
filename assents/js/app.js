function searchSongs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const songs = document.querySelectorAll('.song');

    songs.forEach(song => {
        const title = song.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            song.style.display = 'block';
        } else {
            song.style.display = 'none';
        }
    });
}
