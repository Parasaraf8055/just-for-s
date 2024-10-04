// Add event listener to envelope image
document.querySelector('.envelope-image').addEventListener('click', function() {
    // Show letter on click
    document.querySelector('.letter').style.display = 'block';
});

// Add event listener to happy birthday button
document.querySelector('.happy-birthday-button').addEventListener('click', function() {
    // Play confetti animation
    confetti();
    // Play happy birthday sound effect
    var audio = new Audio('377754-Cartoon_Katie_Happy_Birthday.mp3');
    audio.play();
});

document.querySelector('.happy-birthday-button').addEventListener('click', function() {
    // Create dialogue box for happy birthday button
    var happyBirthdayDialogueBox = document.createElement('div');
    happyBirthdayDialogueBox.className = 'dialogue-box';
    happyBirthdayDialogueBox.textContent = 'this for you Sayali!';
    document.body.appendChild(happyBirthdayDialogueBox);
    // Play confetti animation
    confetti();
    // Play happy birthday sound effect
    var audio = new Audio('happy-birthday-sound-effect.mp3');
    audio.play();
});

// Confetti animation function
function confetti() {
    var confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
    for (var i = 0; i < 100; i++) {
        var confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiContainer.appendChild(confettiPiece);
        confettiPiece.style.animation = 'confetti-fall ' + (Math.random() * 3 + 2) + 's';
    }
    setTimeout(function() {
        confettiContainer.remove();
    }, 5000);
}

var pandaAnimationContainer = document.getElementById('panda-animation');
var pandaCharacter = document.createElement('div');
pandaCharacter.className = 'panda-character';
pandaAnimationContainer.appendChild(pandaCharacter);

// Create dialogue box for panda
var dialogueBox = document.createElement('div');
dialogueBox.className = 'dialogue-box';
dialogueBox.textContent = 'Happy Birthday, Sayali!';
pandaAnimationContainer.appendChild(dialogueBox);

// Show dialogue box when panda animation ends
pandaCharacter.addEventListener('animationend', function() {
    dialogueBox.style.display = 'block';
});

// Panda animation function
function pandaAnimation() {
    var pandaAnimationContainer = document.getElementById('panda-animation');
    var pandaCharacter = document.createElement('div');
    pandaCharacter.className = 'panda-character';
    pandaAnimationContainer.appendChild(pandaCharacter);
    pandaCharacter.addEventListener('animationend', function() {
        // Add speech bubble with happy birthday message
        var speechBubble = document.createElement('div');
        speechBubble.textContent = 'Happy Birthday!';
        speechBubble.style.position = 'absolute';
        speechBubble.style.top = '50%';
        speechBubble.style.left = '50%';
        speechBubble.style.transform = 'translate(-50%, -50%)';
        speechBubble.style.fontSize = '24px';
        speechBubble.style.fontWeight = 'bold';
        pandaAnimationContainer.appendChild(speechBubble);
    });
}

// Trigger panda animation on page load
window.addEventListener('load', function() {
    pandaAnimation();
});

// Play background music
document.getElementById('birthday-music.mp3').play();