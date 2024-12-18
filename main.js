const song = document.getElementById('song');
const progress = document.getElementById('progress');
const playPauseBtn = document.getElementById('playPause');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const songTitle = document.querySelector('h1'); // Select the h1 element for song title
const artistName = document.querySelector('p'); // Select the p element for artist name

let currentSongIndex = 0; // Keeps track of the current song being played
const playlist = [ // Array to store song details (modify paths if needed)
  { title: "Be-Warned (1)", artist: "Artist 1", src: "MUSIC/Be-Warned (1).mp3" },
  { title: "Be-Warned (2)", artist: "Artist 2", src: "MUSIC/Be-Warned (2).mp3" },
  { title: "Be-Warned (3)", artist: "Artist 3", src: "MUSIC/Be-Warned (3).mp3" },
  { title: "Be-Warned (4)", artist: "Artist 4", src: "MUSIC/Be-Warned (4).mp3" },
  { title: "Be-Warned (5)", artist: "Artist 5", src: "MUSIC/Be-Warned (5).mp3" },
  { title: "Be-Warned (6)", artist: "Artist 6", src: "MUSIC/Be-Warned (6).mp3" },
  { title: "Be-Warned (7)", artist: "Artist 7", src: "MUSIC/Be-Warned (7).mp3" },
  { title: "Be-Warned (8)", artist: "Artist 8", src: "MUSIC/Be-Warned (8).mp3" },

];

// Update song title and artist based on current index
function updateSongInfo() {
  songTitle.innerText = playlist[currentSongIndex].title;
  artistName.innerText = playlist[currentSongIndex].artist;
  song.src = playlist[currentSongIndex].src;
}

// Function to play/pause the song
function playPause() {
  if (song.paused) {
    song.play();
    playPauseBtn.querySelector('i').className = 'fa-solid fa-pause';
  } else {
    song.pause();
    playPauseBtn.querySelector('i').className = 'fa-solid fa-play';
  }
}

// Function to skip to the next song
function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0; // Loop back to first song
  }
  updateSongInfo();
  playPause(); // Play the next song automatically
}

// Function to skip to the previous song
function previousSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1; // Loop back to last song
  }
  updateSongInfo();
  playPause(); // Play the previous song automatically
}

// Update progress bar while song is playing
song.addEventListener('timeupdate', function() {
  const currentTime = song.currentTime;
  const duration = song.duration;
  progress.value = (currentTime / duration) * 100;
});

// Update volume based on progress bar
progress.addEventListener('input', function() {
  song.volume = progress.value / 100;
});

// Change play/pause icon on song end and automatically play next song
song.addEventListener('ended', nextSong);

// Attach click events to buttons
playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
previousBtn.addEventListener('click', previousSong);

// Update song info initially
updateSongInfo();