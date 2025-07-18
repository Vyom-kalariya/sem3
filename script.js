


document.addEventListener('DOMContentLoaded', function () {
    const progressSection = document.getElementById('progress');
    const startButton = document.getElementById('start-progress');
    
    startButton.addEventListener('click', function () {
        
        progressSection.classList.add('active');
    });
});

function playSound() {
    var sound = document.getElementById("mySound");
    sound.play();
  }

///////////////////////////////////////////////////
