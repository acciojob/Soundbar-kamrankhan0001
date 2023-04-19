//your JS code here. If required.
// Get the buttons container
const buttonsContainer = document.getElementById("buttons");

// Create an array of sound file names
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];

// Create an audio element for each sound file and add it to the page
sounds.forEach(sound => {
  const audioElement = new Audio(`sounds/${sound}`);
  buttonsContainer.appendChild(audioElement);
});

// Function to play a sound file
function playSound(soundFile) {
  // Stop all other playing sounds
  stopSound();

  // Get the audio element for the specified sound file
  const audioElement = buttonsContainer.querySelector(`audio[src="sounds/${soundFile}"]`);

  // Play the sound file
  audioElement.play();
}

// Function to stop all playing sounds
function stopSound() {
  // Get all audio elements on the page
  const audioElements = buttonsContainer.querySelectorAll("audio");

  // Stop all audio elements
  audioElements.forEach(audioElement => {
    audioElement.pause();
    audioElement.currentTime = 0;
  });
}

