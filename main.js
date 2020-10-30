// Play audio on keydown 
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// Function to Remove Playing Class After Transition  
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}

//Array of Keys
const keys = document.querySelectorAll('.key'); 
//Loop over array of keys and remove class of playing after transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//Play Sound whenever the key is pressed
window.addEventListener('keydown',playSound);